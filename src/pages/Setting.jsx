import React from 'react'
import SideNav from '../components/SideNav'
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';
import List from "../settings/List";
const Setting = () => {
  return (
    <>
     <NavBar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
    <SideNav/>
    
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <List/>
    </Box>
    </Box>
       
      
   </>
  )
}

export default Setting