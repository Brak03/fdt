// src/App.js
import React, { useState } from 'react';
import CategorySelection from './components/CategorySelection';
import DataInput from './components/DataInput';
import FrontendDisplay from './components/FrontendDisplay';
import MixPositions from './components/MixPositions';

function App() {
  const [view, setView] = useState('selection');
  const [selection, setSelection] = useState({});
  const [listaActual, setListaActual] = useState([]);

  const handleShowList = (selection) => {
    setSelection(selection);
    setView('display');
  };

  const handleAddData = (selection) => {
    setSelection(selection);
    setView('input');
  };

  return (
    <div className="App">
      {view === 'selection' && <CategorySelection onShowList={handleShowList} onAddData={handleAddData} />}
      {view === 'input' && <DataInput />}
      {view === 'display' && (
        <>
          <FrontendDisplay categoria={selection.categoria} ronda={selection.ronda} pial={selection.pial} />
          <MixPositions listaActual={listaActual} />
        </>
      )}
    </div>
  );
}

export default App;

