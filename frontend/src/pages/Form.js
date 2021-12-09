import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    const [name, setName] = useState("")
    const [iSValid, setIsValid] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    const student = {
      name: name,
    }

    fetch('http://localhost:5000/students', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      setIsValid(true)
  }

  return (
      <div className="container mt-3">
       {iSValid ?
       (
        <>
        <h1>Yeah added student</h1>
        <Link to="/"><p>retour au menu</p></Link>
        </>
      ):
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-3">
          <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="col-3">
          <button class="btn btn-primary" type="submit">Créer student</button>
        </div>
      </div>
    </form>
  
    }
  </div>
  );
};

export default Form;