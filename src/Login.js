import React from 'react'
import './Login.css';
import logo from './pxArt.png';
import {Button} from "@material-ui/core";
import { auth, provider } from "./firebase";
import NavBar from './componot/NavBar';
import GoogleIcon from '@mui/icons-material/Google';



function login() {
    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error) => alert(error.
        message));
    };
    return (
        <div className="login">
            <NavBar />
            <div className="login__logo">
                <img src={logo} alt="SKCN-logo" />
            </div>

            <h1>Welcome to S.Net</h1>
            <Button onClick={signIn}><GoogleIcon/> <snap className="sign-in-text">sign in</snap></Button>
        </div>


    )
}

export default login
