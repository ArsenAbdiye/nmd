import React, {useEffect, useState} from 'react';
import axios from "axios";
const Students = () => {
    const [data, setData] = useState([])
    const getStudents = () => {
        axios("http://localhost:4444/Students")
            .then(({ data }) => setData(data))
            .catch(err => alert(err))
    }
    useEffect(() => {
        getStudents()
    }, [])
    return (
        <section className='students'>
            <div className="container">
                <div className="students__row">
                    {
                        data.map(item =>(
                            <div className="students__card">
                                <img src={item.img} alt="/" />
                                <h2>
                                    {item.name}
                                </h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
export default Students;