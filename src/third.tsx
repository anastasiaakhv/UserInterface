import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './Components/Navbar';

function Third({count, setCount} : {count: any, setCount: any}) {

function handleClick() {
      setCount( (prev : any) => prev - 1);
}
  
  return (
    <div>
      <ResponsiveAppBar/>
      <Button onClick ={handleClick} style = {{margin: 20}} variant="contained">{(String(count))} </Button>
    </div>
  );
}

export default Third;
