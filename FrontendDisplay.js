// src/components/FrontendDisplay.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FrontendDisplay({ categoria, ronda, pial }) {
  const [listas, setListas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/listasSorteadas')
      .then(response => setListas(response.data))
      .catch(error => console.error('Error al cargar las listas:', error));
  }, []);

  const listasFiltradas = listas.filter(lista =>
    lista.categoria === categoria && lista.ronda === ronda && lista.pial === pial
  );

  return (
    <div className="p-4">
      <h2>Listas Sorteadas para {`${categoria} - Ronda ${ronda} - Pial ${pial}`}</h2>
      {listasFiltradas.map((lista, index) => (
        <div key={index}>
          <h3>Competidores:</h3>
          {lista.competidores.map((competidor, i) => (
            <p key={i}>{competidor.nombre} - {competidor.edad}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FrontendDisplay;
