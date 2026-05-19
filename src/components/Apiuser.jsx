import { memo,useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import {Backdrop,CircularProgress,Button} from '@mui/material';
import { Outlet, useNavigate } from "react-router-dom";
const baseurl = import.meta.env.VITE_BASEURL;
import api from "../api/axios";

const Apiuser = () => {
    const navigate = useNavigate();
    const[user,setUser] = useState([]);
    const[search,setSearch] = useState("");
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
      const details = async () =>{
        const response = await api.get("traveldetails")
        setUser(response.data.travelsDetails)
        setLoading(false)

      }

      details();

        // fetch(`${baseurl}/traveldetails`)
        //     .then(res => res.json())
        //     .then(response => {
        //         setTimeout(() => {                 
        //           setUser(response.travelsDetails)
        //             setLoading(false)
        //         }, 1000);
        //     })
        //     .catch(err => console.log(err))
    },[]);
    
    const filtered = user.filter(user => user.travel_name.toLowerCase().includes(search.toLowerCase()))
    
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
                    <TableCell align="right">Travels Name</TableCell>
                    <TableCell align="right">city</TableCell>
                    <TableCell align="right">Action</TableCell>
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
                     <TableCell align="right">{row.travel_name}</TableCell>
                     <TableCell align="right">{row.city}</TableCell>
                     <TableCell align="right"><Button onClick={() => navigate(`/Apiuser/edit/${row.id}`)
                     }>Edit</Button></TableCell>
                   </TableRow>
                 ))}
               </TableBody>
             </Table>
           </TableContainer>
        }
        <Outlet/>
    </div>
  )
}

export default memo(Apiuser);