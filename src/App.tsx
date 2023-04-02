import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './Components/Navbar';
import { TextField } from '@mui/material';


function App() {
  
  const [input, setInput] = useState("");

  return (
    <div>
    <ResponsiveAppBar/>
    <div style = {{padding: 20}}> 
    <TextField value = {input} style = {{marginRight: 20}} id="outlined-basic" label={input} variant="outlined" onChange={(a)=>{
      setInput(a.target.value);
    }} />
    <Button variant="contained" onClick={()=> {
      setInput("");
    }}>Clear</Button>
    </div>
  </div>

  );
}

export default App;
