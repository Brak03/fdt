const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let listasSorteadas = [];  // Aquí guardarás las listas ya sorteadas
let listasSinSortear = []; // Aquí guardarás las listas sin sortear

app.use(bodyParser.json());

// Ruta para obtener listas sorteadas
app.get('/api/listasSorteadas', (req, res) => {
  res.json(listasSorteadas);
});

// Ruta para añadir una nueva lista sin sortear
app.post('/api/agregarCompetidor', (req, res) => {
  const nuevaLista = req.body;
  listasSinSortear.push(nuevaLista);
  res.json({ message: "Competidor agregado exitosamente." });
});

// Ruta para mezclar posiciones
app.post('/api/mezclarPosiciones', (req, res) => {
  // Lógica para mezclar las posiciones
  let lista = req.body;
  lista = lista.sort(() => Math.random() - 0.5);
  listasSorteadas.push(lista);
  res.json({ message: "Lista mezclada y guardada exitosamente." });
});

app.listen(3001, () => {
  console.log('Servidor ejecutándose en http://localhost:3001');
});
