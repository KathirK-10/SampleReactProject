import { memo,useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {Backdrop,CircularProgress} from '@mui/material';


const Apiuser = () => {
    const[user,setUser] = useState([]);
    const[search,setSearch] = useState("");
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
             fetch("https://jsonplaceholder.typicode.com/users")
             .then(res => res.json())
             .then(data=> {
                setTimeout(() => {
                    setUser(data)
                    setLoading(false)
                }, 1000);
            })
            .catch(err => console.log(err))
    },[]);

    const filtered = user.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()))
    
  return (
    
    <div className="container">
        <h3>API User</h3>
        {loading ? <Backdrop sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}open={loading}>
                    <CircularProgress color="inherit" />
                    </Backdrop>:
             <TableContainer component={Paper}>
                 <TextField id="standard-basic" label="Search" fullWidth variant="standard" onChange={(e)=>setSearch(e.target.value)}/>
             <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <TableHead>
                 <TableRow>
                   <TableCell>Id</TableCell>
                   <TableCell align="right">Name</TableCell>
                   <TableCell align="right">Username</TableCell>
                   <TableCell align="right">Email</TableCell>
                   <TableCell align="right">Address</TableCell>
                   <TableCell align="right">Phone</TableCell>
                   <TableCell align="right">Website</TableCell>
                   <TableCell align="right">Company</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                 {filtered.map((row) => (
                   <TableRow
                     key={row.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                   >
                     <TableCell component="th" scope="row">
                       {row.id}
                     </TableCell>
                     <TableCell align="right">{row.name}</TableCell>
                     <TableCell align="right">{row.username}</TableCell>
                     <TableCell align="right">{row.email}</TableCell>
                     <TableCell align="right">{row.address.street+","+row.address.suite+","+row.address.city+","+row.address.zipcode}</TableCell>
                     <TableCell align="right">{row.phone}</TableCell>
                     <TableCell align="right">{row.website}</TableCell>
                     <TableCell align="right">{row.company.name}</TableCell>

                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
        }
    </div>
  )
}

export default memo(Apiuser);