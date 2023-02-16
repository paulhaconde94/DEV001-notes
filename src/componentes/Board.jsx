import React, { Fragment, useEffect, useState } from "react";
import logo from '../assets/LogoWC.png';
import { } from "../firebase/firebase-init";

const Board = () => {


    return (

        <>  
        <div className="header">
            <header className="board-header">
            <img src={logo} className="logo" alt="logo" />
            </header>
        </div>
        <h3> Agrega tu nota </h3>
         
         <form>
            <div className="note-container">
                <input
                 placeholder="Titulo"
                 className="titleNotes"
                />
            </div>
            
         </form>

        </> 
    );  

}



export default Board; 