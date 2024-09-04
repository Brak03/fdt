const { app, BrowserWindow } = require('electron');
const path = require('path');
const server = require('./backend/server'); // Importa el servidor backend

async function createWindow() {
  const isDev = (await import('electron-is-dev')).default; // Importa dinámicamente electron-is-dev

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js'),
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
}

app.on('ready', createWindow);
