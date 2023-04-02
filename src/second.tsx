import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './Components/Navbar';

function Second({count, setCount} : {count: any, setCount: any}){

function handleClick() {
    setCount( (prev : any) => prev + 1);
}
  
  return (
    <div>
      <ResponsiveAppBar/>
      <Button onClick ={handleClick} style = {{margin: 20}} variant="contained">{count} </Button>
    </div>
  );
}

export default Second;
