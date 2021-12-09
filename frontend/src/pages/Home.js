import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    
    const [students, setStudents] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/students')
        .then(response => response.json())
        .then(data => setStudents(data))
    }, [])

    return (
  
            <div className="container mt-3">
            <h1>Home</h1>
                {students.map(student => (
                <div className="col-3" >
                    <div className="border border-secondary mt-3 pt-2">
                        <p>{student.name}</p>
                    </div>
                </div>
                ))}
            </div>
        
    );
};

export default Home;