import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App';
import './App copy.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Signup from './signup';
import { Link } from "react-router-dom"; 

// routing

function LoginAccount(){
    return(
        alert("Login Successfully")
    )
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function Login() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));




    return (
        <>
            <div className='loginPage'>
                <Grid item md={12} lg={12} sm={12}  >
                    <div style={{ minWidth: 275, width: "50vw" }}><Typography variant='h5' sx={{ color: "white" }}>WELCOME TO LOGIN PAGE</Typography></div>
                    <Card sx={{ minWidth: 275, width: "50vw", height: "70vh", }} className="cardVectorImg">
                        <Grid>
                            <CardContent sx={{ padding: "0", margin: "0" }}>
                                <div style={{ display: "flex", padding: "0", margin: "0", backgroundColor: "#143F6B" }}>
                                    <div style={{ width: "25vw", padding: "5px", }}>
                                        <Link to="/login">
                                            <Button className='btn1' startIcon={<AccountCircleIcon />} sx={{ width: "25vw", fontSize: "1.2rem", backgroundColor: "white", color: "#143F6B" }} variant="contained">Login</Button>
                                        </Link>
                                    </div>
                                    <div style={{ width: "25vw", padding: "5px" }}>
                                        <Link to="/signup" sx={{}}>
                                            <Button startIcon={<AppRegistrationIcon />} sx={{ width: "25vw", fontSize: "1.2rem", backgroundColor: "#143F6B" }} variant="contained">signUp</Button>
                                        </Link>

                                    </div>
                                </div>
                            </CardContent>
                        </Grid>
                        <div style={{ marginTop: "100px", alignItem: "center" }}>
                            <CardActions sx={{ display: "flex", marginTop: "20px", justifyContent: "center" }}>
                                <Typography sx={{ padding: "5px" }}><EmailIcon sx={{ color: "white" }} /></Typography>
                                <TextField sx={{ width: "20vw", padding: "5px", backgroundColor: "white", borderRadius: "5px" }} id="filled-size-normal" label="Email" color="" type="email " variant="filled" />
                            </CardActions>

                            <CardActions sx={{ display: "flex", marginTop: "20px", justifyContent: "center" }}>
                                <Typography sx={{ padding: "5px" }}><HttpsIcon sx={{ color: "white", }} /></Typography>
                                <TextField sx={{ width: "20vw", padding: "5px", backgroundColor: "white", borderRadius: "5px" }} id="filled-basic" label="Password" color="" type="password " variant="filled" />
                            </CardActions>

                            <CardActions sx={{ display: "flex", marginTop: "20px", justifyContent: "center" }}>
                               <Link to="/dashboard">
                               <Button onClick={LoginAccount} sx={{ backgroundColor: "#143F6B", width: "15vw   " }} variant="contained"  >
                                    LOGIN
                                </Button>
                               </Link>
                            </CardActions>
                        </div>
                    <div style={{marginTop:"150px"}}>
                    
                        <Typography variant="h6" sx={{color:"white"}}>
                              All Right reserved by Usama Softech Solution
                        </Typography>
                    </div>


                    </Card>
                    

                </Grid>

            </div>

        </>
    )
}
