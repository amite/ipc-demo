const electron = require('electron')

const countdown = require('./countdown')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const ipc = electron.ipcMain

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

ipc.on('countdown-start', _ => {
  countdown(count => {
    mainwindow.webContents.send('countdown', count)
  })
})

