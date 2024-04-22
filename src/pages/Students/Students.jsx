import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Students = () => {
    const [data, setData] = useState([]);
    
    const getStudents = () => {
        axios.get("http://localhost:4444/Students")
            .then(({ data }) => setData(data))
            .catch(err => alert(err));
    };

    useEffect(() => {
        getStudents();
    }, []);
    console.log(data);
    return (
        <section className="Students">
            <div className="container">
            <h1>Список Студентов</h1>
                <div className="students__row">
                    {data.map((item) => (
                        <Link key={item.id} to={`/student/${item.id}`} style={{ background: `url(${item.img}) center/cover` }} className="students__card">
                            <h2 className="students__card-name">{item.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>  
        </section>
    );
};

export default Students;