import React from 'react'
import SideNav from '../components/SideNav'
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';
import PoductLsit from '../pages/products/ProductList';
import ProductList from '../pages/products/ProductList';
const Product = () => {
  return (
    <>
     <NavBar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
    <SideNav/>
    
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <h1><ProductList/></h1>
      </Box>
    </Box>
       
      
   </>
  )
}

export default Product