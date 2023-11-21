const { app, BrowserWindow, autoUpdater } = require('electron')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1500,
      height: 900,
      icon:'src/assets/Icons/WOLFforce_icon_22_256px.png',
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      },
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        color: 'rgba(0,0,0,0)',
        symbolColor: '#ffffff',
        height:40
      }
    })
  
    win.loadFile('src/index.html')
    //d win.setBackgroundMaterial('acrylic')              sets titlebar to acrylic
    win.setMenuBarVisibility(false)
    

    }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })