import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    maximizable: false,
    fullscreenable: false,
    resizable: false,
  });

  mainWindow.loadURL(process.env.APP_URL);
  mainWindow.webContents.openDevTools({
    mode: 'detach',
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
