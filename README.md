Resumen del Flujo de Trabajo:
Selección de Categoría, Ronda y Pial:

El usuario selecciona una categoría, ronda y tipo de "pial" (derecha/izquierda).
Puede elegir entre "Mostrar" una lista ya sorteada o "Ingresar" datos en una nueva lista.
Mostrar Lista:

Si se selecciona "Mostrar", la aplicación buscará en la base de datos la lista correspondiente (ya sorteada) y la mostrará en el frontend.
Ingreso de Datos:

Si se selecciona "Ingresar", se mostrará un formulario donde se pueden agregar nuevos competidores o modificar la lista existente.
Los cambios se guardan automáticamente en la base de datos.
Mezclar Posiciones:

El usuario puede mezclar (sortear) las posiciones de los competidores.
Las posiciones sorteadas se guardan en una base de datos de listas sorteadas.

Estractura
├── public/
│   └── placeholder.svg (imagen de marcador de posición)
├── src/
│   ├── components/
│       ├── CategorySelection.js
│       ├── DataInput.js
│       ├── FrontendDisplay.js
│       └── MixPositions.js
 |    └── App.js
├── backend/
│   └── server.js (servidor backend con Node.js y Express)
├── index.js (archivo principal de Electron)
├── package.json
└── package-lock.json
