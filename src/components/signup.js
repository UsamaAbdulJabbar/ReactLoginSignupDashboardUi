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
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

export default function Signup() {
    const createAccount = () => {
        return (
            alert("Account Created Successfully")
        )
    }


    return (
        <>
            <div className='signupPage'>
                <Grid item md={12} lg={12} sm={12}  >
                    <div style={{ minWidth: 275, width: "50vw" }}><Typography variant='h5' sx={{ color: "white" }}>WELCOME TO SIGNUP PAGE</Typography></div>
                    <Card sx={{ minWidth: 275, width: "50vw", height: "70vh", }} className="cardVectorImg">
                        <Grid>
                            <CardContent sx={{ padding: "0", margin: "0" }}>
                                <div style={{ display: "flex", padding: "0", margin: "0", backgroundColor: "#143F6B" }}>
                                    <div style={{ width: "25vw", padding: "5px", }}>
                                        <Link to="/login">
                                            <Button className='btn1' startIcon={<AccountCircleIcon />} sx={{ width: "25vw", fontSize: "1.2rem", backgroundColor: "#143F6B", }} variant="contained">Login</Button>
                                        </Link>
                                    </div>
                                    <div style={{ width: "25vw", padding: "5px" }}>
                                        <Link to="/signup">
                                            <Button startIcon={<AppRegistrationIcon />} sx={{ width: "25vw", fontSize: "1.2rem", backgroundColor: "white", color: "#143F6B"  }} variant="contained">signUp</Button>
                                        </Link>

                                    </div>
                                </div>
                            </CardContent>
                        </Grid>
                        <div style={{ alignItem: "center" }}>
                            <CardActions sx={{ display: "flex", marginTop: "20px", justifyContent: "center" }}>
                                <Typography sx={{ padding: "5px" }}><PersonIcon sx={{ color: "white" }} /></Typography>
                                <TextField sx={{ width: "20vw", padding: "5px", backgroundColor: "white", borderRadius: "5px" }} id="filled-size-normal" label="User Name    " color="" variant="filled" />
                            </CardActions>

                            <CardActions sx={{ display: "flex", marginTop: "20px", justifyContent: "center" }}>
                                <Typography sx={{ padding: "5px" }}><EmailIcon sx={{ color: "white", }} /></Typography>
                                <TextField sx={{ width: "20vw", padding: "5px", backgroundColor: "white", borderRadius: "5px" }} id="filled-basic" label="Email" color="" variant="filled" />
                            </CardActions>



                            <CardActions sx={{ display: "flex", marginTop: "20px", justifyContent: "center" }}>
                                <Typography sx={{ padding: "5px" }}><HttpsIcon sx={{ color: "white", }} /></Typography>
                                <TextField sx={{ width: "20vw", padding: "5px", backgroundColor: "white", borderRadius: "5px" }} id="filled-basic" label="Password" color="" variant="filled" />
                            </CardActions>

                            <CardActions sx={{ display: "flex", marginTop: "20px", justifyContent: "center" }}>
                                <Typography sx={{ padding: "5px" }}><HttpsIcon sx={{ color: "white", }} /></Typography>
                                <TextField sx={{ width: "20vw", padding: "5px", backgroundColor: "white", borderRadius: "5px" }} id="filled-basic" label="Confirm Password" color="" variant="filled" />
                            </CardActions>

                            <CardActions sx={{ display: "flex", marginTop: "20px", justifyContent: "center" }}>
                                <Link to="/login">
                                    <Button onClick={createAccount} sx={{ backgroundColor: "#143F6B", width: "15vw   " }} variant="contained"  >
                                        Create Account
                                    </Button>
                                </Link>
                            </CardActions>
                        </div>


                        <div style={{ marginTop: "50px" }}>

                            <Typography variant="h6" sx={{ color: "white" }}>
                                All Right reserved by Usama Softech Solution
                            </Typography>
                        </div>

                    </Card>


                </Grid>
            </div>
        </>
    )
}
