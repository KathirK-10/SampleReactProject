import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
const Tod = () => {
    const [text,setText] = useState('');
    function handleData(data){
        setText(data);    
    }
    const dispatch = useDispatch();
  return (
    <div>
        <input type="text" onChange={(e) => handleData(e.target.value)}/>
        <button onClick={() => dispatch({ type: 'Add',payload: text})}>Add</button>
    </div>
  )
}

export default Tod