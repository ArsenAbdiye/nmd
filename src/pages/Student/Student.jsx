import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Student = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    const getStudent = (id) => {
        axios.get(`http://localhost:4444/Students?id=${id}`)
            .then(({ data }) => {
                if (data.length > 0) {
                    setStudent(data[0]);
                } else {
                    setStudent(null);
                }
            })
            .catch((err) => alert(err));
    };

    useEffect(() => {
        getStudent(id);
    }, [id]);

    if (!student) {
        return <div>Loading...</div>;
    }

    return (
        <section className="Student">
            <div className="container">
                <p>{student.name}</p>
                <img src={student.img} alt="" />
            </div>
        </section>
    );
};

export default Student;