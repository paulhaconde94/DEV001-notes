import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logoHeader.png';
import logoText from '../assets/tituloHeader.png';
import { getNotes, saveNote, auth, boardSignOut, editNotes, onDeleteNotes  } from "../firebase/firebase-init";
import iconoEdit from '../assets/iconoEdit.png';
import iconoDelete from '../assets/iconoDelete.png';
import './Board.css';

const Board = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [listNotes, setListNotes] = useState([]);
    const [oldData, setOldData] = useState("");
    const [editStatusNote, setEditStatusNote] = useState(false);

    const saveData = async() => {
        if(editStatusNote){
            console.log(oldData)
            await editNotes(oldData, { title: title, description: description } ,userId);
            setEditStatusNote(false)
        }else{
            saveNote(title, description, userId);
        }
        getListNotes();
        //Para reiniciar los campos como vacios luego que de se realizará una publicación
        setTitle("");
        setDescription("");
    };

    const getListNotes = () => {
        getNotes(userId)
            .then((items) => {
                setListNotes(items);
            })
            .catch((error) => console.error("Estos catch", error));
    };


    useEffect(() => {
        getListNotes();
    }, []);

    const navigate = useNavigate();
    const logOut = () => {
        boardSignOut(auth).then(() => {
            console.log("Sesión cerrada con exito");
            navigate('/')

        }).catch((error) => {
            console.error(error)
        })
    }

    const editData = (item) => {
        setTitle(item.data.title);
        setDescription(item.data.description);
        setOldData(item);
        setEditStatusNote(true);
    };
    
    const deleteNotesData = (id, userId) => {
        console.log(id, userId)
        onDeleteNotes(id, userId);
        getListNotes();
      };
    const userId = localStorage.getItem("email")

    return (
        <>
            <header className="board-header">
                <div className="board-header-left">
                    <img src={logo} className="board-logo" alt="logo" />
                    <img src={logoText} className="logoText" alt="logoText" />
                </div>
                <button className="logOut" onClick={logOut}> Cerrar sesión </button>
            </header>
            <div className="notes-dataAll-user">
                <h4 className="notes-data-user">
                    Usuario Conectado: {localStorage.getItem("name")}
                </h4>
                <h4 className="notes-data-user"> {localStorage.getItem("email")}</h4>
            </div>

            <h3 className="add-text"> Agrega tu nota </h3>
            
                <div className="all-container">
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
                        className="descriptionNotes"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                </div>
                </div>
        
                <button className="btn-guardar-notas" onClick={saveData}>Guardar Nota</button>
                <div className="box-note">
                {listNotes.map((item, index) => (
                    <div className="individualNotesContainer" key={`${index}-${item.data.title}`}>
                        <p className="tituloNota">{item.data.title}</p>
                        <p className="descripcionNota">{item.data.description}</p>
                        <div className="Container-button"> 
                        <button
                            type="button"
                            className="individualNotesEdit"
                            onClick={() => editData(item)}>
                            {/* <i class='bx bx-edit-alt'></i> */}
                            <img className="iconoEdit" alt="iconoEdit" src={iconoEdit}/> 
                        </button>
                        <button
                             type="button"
                             className="individualNotesDelete"
                             onClick={() => deleteNotesData(item.id, userId)}>
                             {/* <i class='bx bx-trash'></i> */}
                           <img className="iconoDelete" alt="iconoDelete" src={iconoDelete}/>
                        </button>
                        </div>
                        </div>


                ))}

            </div>
        </>
    );

}


export default Board; 