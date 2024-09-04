// src/components/DataInput.js
import React, { useState } from 'react';
import axios from 'axios';

function DataInput() {
  const [competidor, setCompetidor] = useState({ nombre: '', edad: '', nacionalidad: '', departamento: '', id: '' });

  const handleInputChange = (e) => {
    setCompetidor({ ...competidor, [e.target.name]: e.target.value });
  };

  const handleAddCompetidor = () => {
    axios.post('http://localhost:3001/api/agregarCompetidor', competidor)
      .then(response => alert(response.data.message))
      .catch(error => console.error('Error al agregar competidor:', error));
  };

  return (
    <div className="p-4">
      <h2>Ingresar Competidor</h2>
      <input name="nombre" placeholder="Nombre" onChange={handleInputChange} />
      <input name="edad" placeholder="Edad" type="number" onChange={handleInputChange} />
      <input name="nacionalidad" placeholder="Nacionalidad" onChange={handleInputChange} />
      <input name="departamento" placeholder="Departamento" onChange={handleInputChange} />
      <input name="id" placeholder="ID" onChange={handleInputChange} />
      <button onClick={handleAddCompetidor}>Agregar Competidor</button>
    </div>
  );
}

export default DataInput;
