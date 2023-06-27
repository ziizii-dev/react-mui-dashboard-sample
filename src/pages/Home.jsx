import React from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
// import SideNav from '../components/SideNav';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import AccordionDash from "../components/AccordionDash"
import "../Dash.css";
import BarChart from "../charts/BarChart";
import CountUp from 'react-countup';
const Home = () => {
  return (
    <>
    <div className="bgcolor">
    <NavBar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49+'%',height:150 }} className="gradient">
               
                  <div className="iconstyle"><PaymentTwoToneIcon/>
                  <Typography gutterBottom variant="h5" component="div" sx={{ color:"#ffffff" }}>
                     <CountUp delay={0.2} end={500} duration={0.2}/>
                      
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div"  sx={{ color:"#ccd1d1" }}>
                      Total Earnings
                    </Typography>
                  </div>
                   

                </Card>
                
                <Card sx={{ minWidth: 49+'%',height:150 }} className="gradientlight">
                 
                    <div className="iconstyle"><LocalMallTwoToneIcon/>
                    <Typography gutterBottom variant="h5" component="div"  sx={{ color:"#ffffff" }}>
                    <CountUp delay={0.2} end={900} duration={0.2}/>
                    </Typography>
                     <Typography gutterBottom variant="body2" component="div"  sx={{ color:"#ccd1d1" }}>
                      Total order
                    </Typography>
                    
                    </div>
                    
                    
               
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card  className="gradientlight">
                  
                  <Stack spacing={2} direction="row">
                   <div className="iconstyle"> <StorefrontIcon/></div>
                  <div className="paddingall">
                  <span className="pricetitle">  $203k</span> <br />
                 <span className="pricesubtitle">Total Income</span>
                  </div>
                  </Stack>
              
                </Card>
                <Card >
                
                  <Stack spacing={2} direction="row">
                   <div className="iconstyleblack"> <StorefrontIcon/></div>
                  <div className="paddingall">
                  <span className="pricetitle">  $203k</span> <br />
                 <span className="pricesubtitle">Total Income</span>
                  </div>
                  </Stack>
            
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height:60+'vh' }}>
                <CardContent>
                  <BarChart/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{ height:60+'vh' }}>
                <CardContent>
                <div className="paddingall">
                  <span className="pricetitle"> Pupular Products</span> <br />
                  </div>
                 
                <AccordionDash/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
     
    </>
  );
};

export default Home;
