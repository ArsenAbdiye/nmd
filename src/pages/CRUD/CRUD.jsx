import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CRUD = () => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [nameDelete, Delete] = useState('');


    const createObject = () => {
        const newObj = {
            name: name,
            lastname: lastname
        };

        axios.post("http://localhost:4444/Students", newObj)
            .then(response => {
                alert('true')
            })
            .catch(err => {
                console.error("Ошибка при отправке объекта на сервер:", err);
                alert("false");
            });
    };

    const deleteObject = () => {
        axios.get("http://localhost:4444/Students")
            .then(({ data }) => {
                const updatedData = data.filter(student => student.name !== nameDelete);
                axios.delete("http://localhost:4444/Students")
                    .then(response => {
                        alert("true");
                    })
                    .catch(err => {
                        console.error("Ошибка при удалении всех объектов:", err);
                        alert("false");
                    });
                if (updatedData.length !== data.length) {
                    axios.post("http://localhost:4444/Students", updatedData)
                        .then(response => {
                            alert("true");
                        })
                        .catch(err => {
                            alert("false");
                        });
                } else {
                    alert(`нету`);
                }
            })
            .catch(err => {
                alert("Ошибка получения");
            });
    };


    return (
        <div>
            <button onClick={createObject}>Create</button>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} />

            <button onClick={deleteObject}>delete</button>
            <input type="text" placeholder='nameDelete' value={nameDelete} onChange={(e) => Delete(e.target.value)} />
        </div>
    );
};

export default CRUD;
