import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const CRUD = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [img, setImg] = useState('');
    const [deleteId, setDeleteId] = useState('');
    const [updateId, setUpdateId] = useState('');
    const [newName, setNewName] = useState('');
    const [newLastname, setNewLastname] = useState('');
    const [newImg, setNewImg] = useState('');

    const createObject = () => {
        const newObj = {
            name: name,
            lastname: lastname,
            img: img,
        };

        axios.post("http://localhost:4444/Students", newObj)
            .then(response => {
                alert('Студент создан');
                setName('');
                setLastname('');
                setImg('');
            })
            .catch(err => {
                console.error("Error creating object:", err);
                alert("что то пошло не так");
            });
    };

    const deleteObject = () => {
        axios.delete(`http://localhost:4444/Students/${deleteId}`)
            .then(response => {
                alert('удалено');
            })
            .catch(err => {
                console.error("Error deleting object:", err);
                alert("что то не так");
            });
    };

    const updateObject = () => {
        const updatedObj = {
            name: newName,
            lastname: newLastname,
            img: newImg
        };

        axios.put(`http://localhost:4444/Students/${updateId}`, updatedObj)
            .then(response => {
                alert('Объект обновлён');
                setNewName('');
                setNewLastname('');
                setNewImg('');
            })
            .catch(err => {
                console.error("Ошибка обновления объекта:", err);
                alert("Что-то пошло не так при обновлении");
            });
    };

    return (
        <div className='crud'>
            <h2>Create</h2>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <input type="text" placeholder='img' value={img} onChange={(e) => setImg(e.target.value)} />
            <button onClick={createObject}>Create</button>
            <img src={img} alt="" />

            <h2>Reac</h2>
            <button>
                <NavLink to={"/Students"}>
                    Read
                </NavLink>
            </button>

            <h2>Update</h2>
            <input type="text" placeholder='ID' value={updateId} onChange={(e) => setUpdateId(e.target.value)} />
            <input type="text" placeholder='New Name' value={newName} onChange={(e) => setNewName(e.target.value)} />
            <input type="text" placeholder='New Lastname' value={newLastname} onChange={(e) => setNewLastname(e.target.value)} />
            <input type="text" placeholder='New img' value={newImg} onChange={(e) => setNewImg(e.target.value)} />
            <button onClick={updateObject}>Update</button>

            <h2>Delete</h2>
            <input type="text" placeholder='ID' value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
            <button onClick={deleteObject}>Delete</button>



        </div>
    );
};

export default CRUD;
