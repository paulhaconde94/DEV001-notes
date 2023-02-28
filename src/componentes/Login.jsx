import React from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../firebase/firebase-init";
import logo from '../assets/loginLogo.png';
import google from '../assets/googleLogin.png';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        loginWithGoogle().then((res) => {
            const displayNameUser = res.user.displayName;
            const emailUser = res.user.email;
            localStorage.setItem("name", displayNameUser);
            localStorage.setItem("email", emailUser);
            navigate("/board");
        })
            .catch(console.error)
    };

    return (
        <div className="main-container">
            <div className="frame-remind-login">
                <section id="frame-login-form" className="frame-login-form"></section>
                <span className="container-text-login">
                    <img className="logo" alt="logo" src={logo} />
                    <h3 className="description"> Write Coffee es una app de notas que te ayudará a organizar tus tareas y pendientes.</h3>
                </span>
                <button className="button-login" onClick={signInWithGoogle}>
                    <img className="google" alt="google" src={google} /> Inicia con Google
                </button>

            </div>
        </div>
    );

}

export default Login;