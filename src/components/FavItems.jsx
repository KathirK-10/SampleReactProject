import React, { useState } from 'react'
import { TextField, Select, MenuItem, Button } from '@mui/material';
const FavItems = () => {   
  const[data,setData] = useState({});



  const handleAdd = ()=>{
    console.log('sadsa');
    
  }
  return (
    <div>
      <form>
      <TextField
        id="standard-basic"
        label="Name"
        variant="standard"
        name='name'
        value={data.name}
      />
      <TextField
        id="standard-basic"
        label="Age"
        variant="standard"
        name='age'
        value={data.age}
      />
      <Select
        labelId="demo-simple-select-label"
        label="College"
        id="demo-simple-select"
        name='college'
        value={data.college}
      >
        <MenuItem value={'PU'}>PU</MenuItem>
        <MenuItem value={'SMVEC'}>SMVEC</MenuItem>
      </Select>
    
    <Button variant='outlined' onClick={handleAdd}>Add</Button>
    </form>
    </div>
  )
}

export default FavItems