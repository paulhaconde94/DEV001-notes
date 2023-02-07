import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/LogoWC.png';
import google from '../assets/googleLogin.png';
//import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const responseGoogle = (response) => {
    };


    return (
        <><div className="login">
            <section className="login-form" />
            <img className="logo" alt="logo" src={logo} />
            <h3>Lorem ipsum dolor sit amet. Aut amet molestiae est enim perferendis qui
                dicta magnam eos quia distinctio! Sed eveniet quasi id inventore iure ea distinctio sapiente.
            </h3>
        </div><button className="button-login">
                <img className="google" alt="google" src={google} /> Inicia con Google
            </button></>
    );




}








   export default Login;