import {TextField,Button} from '@mui/material'
import { useState } from 'react'
import  {useNavigate}  from 'react-router-dom'


const Logintask = () => {
    const [user,setUser] = useState({username:'',password:''})
    const [err,setErr] = useState({})
    const navigate = useNavigate();


    function validation(){
        const newErrors = {};
        if (!user.username) newErrors.username = 'Username Cannot Be Empty';
        if (!user.password) newErrors.password = 'Password Cannot Be Empty';
        setErr(newErrors);
        return Object.keys(newErrors).length === 0
    }


    const handleInputs=(e)=>{
        const name=e.target.name;
        const values=e.target.value;
        setUser({...user,[name]:values});
        setErr({...err,[name]:''})
    }

    const handleSubmit=()=>{  
        const usern='kathir';
        const pass='test';
        
        if(validation()){
            if(user.username==usern && user.password==pass){
                localStorage.setItem('isLoggedIn', 'true'); 
                window.location.href = "/";
            }else{
                setErr({password: "Invalid username or password"})
            }
        }
    }
    
  return (
        <div className='container d-flex border p-4' style={{margin:"120px auto",width:"400px",flexDirection:"column"}}>
        <form>
        <h1>Login</h1><hr />
        <TextField label="Username" variant='outlined' autoComplete='current-username' name="username" value={user.username} onChange={handleInputs} className='mt-4 w-100'  error={!!err.username} helperText={err.username}/>
        <TextField label="Password" variant='outlined' autoComplete='current-password' type="password" name="password" value={user.password} onChange={handleInputs} className='mt-3 w-100'  error={!!err.password} helperText={err.password}/>
        <Button variant="contained" color='success' className='mt-5 w-100' onClick={handleSubmit}>Login</Button>       
        </form>
    </div>
     )
}

export default Logintask