const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainwindow

app.on('ready', _ => {
  mainwindow = new BrowserWindow({
    height: 600,
    width: 800
  })

  mainwindow.loadURL(`file://${__dirname}/countdown.html`)

  mainwindow.on('close', _ => {
    console.log('closed!')
    mainwindow = null
  })
})

