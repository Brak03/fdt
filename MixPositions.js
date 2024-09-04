// src/components/MixPositions.js
import React from 'react';
import axios from 'axios';

function MixPositions({ listaActual }) {
  const handleMixPositions = () => {
    axios.post('http://localhost:3001/api/mezclarPosiciones', listaActual)
      .then(response => alert(response.data.message))
      .catch(error => console.error('Error al mezclar posiciones:', error));
  };

  return (
    <div>
      <button onClick={handleMixPositions} className="bg-red-500 text-white px-4 py-2">Mezclar Posiciones</button>
    </div>
  );
}

export default MixPositions;
