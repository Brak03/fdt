// src/components/CategorySelection.js
import React, { useState } from 'react';

function CategorySelection({ onShowList, onAddData }) {
  const [categoria, setCategoria] = useState('Derecha');
  const [ronda, setRonda] = useState(1);
  const [pial, setPial] = useState('Derecha');

  const handleShowList = () => {
    onShowList({ categoria, ronda, pial });
  };

  const handleAddData = () => {
    onAddData({ categoria, ronda, pial });
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Mano Hábil</h2>
      <div className="flex mb-4">
        <button onClick={() => setCategoria('Derecha')} className="mr-2">Derecha</button>
        <button onClick={() => setCategoria('Izquierda')}>Izquierda</button>
      </div>
      <h3 className="mb-2">Pial</h3>
      <button onClick={() => setPial('Derecha')} className="mr-2">Derecha</button>
      <button onClick={() => setPial('Izquierda')}>Izquierda</button>
      <h3 className="mt-4 mb-2">Rondas</h3>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((r) => (
          <button key={r} onClick={() => setRonda(r)} className="p-2 border rounded">{r}</button>
        ))}
      </div>
      <div className="mt-4">
        <button onClick={handleShowList} className="bg-blue-500 text-white px-4 py-2 mr-2">Mostrar</button>
        <button onClick={handleAddData} className="bg-green-500 text-white px-4 py-2">Ingresar</button>
      </div>
    </div>
  );
}

export default CategorySelection;
