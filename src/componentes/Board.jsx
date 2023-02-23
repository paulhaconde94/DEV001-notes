import React, { useEffect, useState } from "react";
import logo from '../assets/logoHeader.png';
import logoText from '../assets/tituloHeader.png';
import { getNotes, saveNote } from "../firebase/firebase-init";
import './Board.css';

const Board = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [listNotes, setListNotes] = useState([]);

    const saveData = () => {
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


    useEffect(() => {
        getListNotes();
    }, []);


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
            <button className="btn-guardar-notas" onClick={saveData}>Guardar Nota</button>
            {listNotes.map((item, index) => (
            <div className="individualNotesContainer" key={`${index}-${item.data.title}`}>
              <p>{item.data.title}</p>
              <p>{item.data.description}</p>

            </div>
            
            ))}
        </>
    );

}


export default Board; 