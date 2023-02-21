import React, { useState } from "react";
import logo from '../assets/logoHeader.png';
import logoText from '../assets/tituloHeader.png';
import { getNotes, saveNote } from "../firebase/firebase-init";
import './Board.css';

const Board = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [setListNotes] = useState([]);


    const saveData = (data, e) => {
        e.preventDefault();
        saveNote(title, description);
        getListNotes();
        //Para reiniciar los campos como vacios luego que de se realizará una publicación
        setTitle("");
        setDescription("");
    };

    const getListNotes = () => {
        getNotes()
            .then((items) => {
                setListNotes(items);
            })
            .catch((error) => console.error("Estos catch", error));
    };


    return (
        <>
            <header className="board-header">
                <div className="board-header-left">
                    <img src={logo} className="board-logo" alt="logo" />
                    <img src={logoText} className="logoText" alt="logoText" />
                </div>
                <button className="logOut"> Cerrar sesión </button>
            </header>

            <h3> Agrega tu nota </h3>

            <div>
                <div className="note-container">

                    <input
                        placeholder="Titulo"
                        className="titleNotes"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />


                </div>
                <div className="postNote-container">

                    <textarea
                        placeholder="Toma una nota..."
                        className="descripcionNotes"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                </div>
            </div>
            <button className="btn-guardar-notas" type="button">Guardar Nota</button>

        </>
    );

}


export default Board; 