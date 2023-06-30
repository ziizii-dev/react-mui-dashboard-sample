import {Typography,Box, Button } from '@mui/material'
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import {useState,useEffect} from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import  {collection,updateDoc, addDoc,doc, getDocs} from "firebase/firestore";
import { db } from "../../firebase-config";
import { async } from '@firebase/util';
import Swal from "sweetalert2";
import { useAppStore } from '../../appStore';
const EditForm = ({fid,closeEvent}) => {
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [category,setCategory] =useState("");
  // const [rows,setRows]=useState([]);
  const setRows = useAppStore((state)=>state.setRows);
  const empCollectionRef = collection(db,"products");
  useEffect(()=>{
    console.log("FID"+fid.id);
    setName(fid.name);
    setPrice(fid.price);
    setCategory(fid.category);
  },[])
  const handleNameChange = (event)=>{
    setName(event.target.value);
  }
  const handlePriceChange =(event)=>{
    setPrice(event.target.value);
  }
  const handleCategoryChange=(event)=>{
    setCategory(event.target.value);
  }
  //Update Section
   const createUser=async()=>{
    const userDoc = doc(db,"products",fid.id);
    const newFields ={
        name:name,
        price:price,
        category:category,
        data:String(new Date()),

    };
     await updateDoc(userDoc,newFields);
     getUsers();
     closeEvent();
     Swal.fire("Subbmitted","Your Field has been updated.","success");
    
   }
    // console.log(createUser);
    const getUsers = async () => {
      const data = await getDocs(empCollectionRef);
      setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    const currencies = [
      {
        value: 'Mobile',
        label: 'Mobile',
      },
      {
        value: 'Laptop',
        label: 'Laptop',
      },
      {
        value: 'Electronics',
        label: 'Electronics',
      },
      {
        value: 'Food',
        label: 'Food',
      },
    ];

  return (
   <>
   <Box sm={{ m:2 }}/>
   <Typography variant='h5' align='center'>
    Edit Product

   </Typography>
   <IconButton style={{ position:"absolute",top:"0",right:"0" }}
   onClick={closeEvent}>
    <CloseIcon/>
   </IconButton>
   <Box height={20}/>
   <Grid container spacing={2}>
    <Grid item xs={12}>
    <TextField 
    id="outlined-basic" 
    label="Name" 
    value={name}
    onChange={handleNameChange}  variant="outlined" 
    size='small' sx ={{ minWidth:"100%" }} />
     
    </Grid>
    <Grid item xs={6}>
    <TextField
     id="outlined-basic" 
    label="Price" type="number"
    
    value={price} 
    onChange={handlePriceChange} variant="outlined" 
    size='small'
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <AttachMoneyIcon />
        </InputAdornment>
      ),
    }}
   
     sx ={{ minWidth:"100%" }} />
    </Grid>
    <Grid item xs={6}>

    <TextField id="outlined-basic" select label="Category"  value={category} onChange={handleCategoryChange} variant="outlined" size='small' sx ={{ minWidth:"100%" }}>
    {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h5' align='center'>
        <Button variant='contained' onClick={createUser}>
          Submit
        </Button>
      </Typography>
    </Grid>
   </Grid>
   <Box sx={{ m:4 }}/>
  

   </>
  )
}

export default EditForm