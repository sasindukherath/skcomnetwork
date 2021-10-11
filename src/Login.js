import React from 'react'
import './Login.css';
import logo from './pxArt.png';
import {Button} from "@material-ui/core";
import { auth, provider } from "./firebase";



function login() {
    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error) => alert(error.
        message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} alt="SKCN-logo" />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>


    )
}

export default login
