const { join } = require('path')
const { BrowserWindow, app, ipcMain, shell } = require('electron')
const isDev = require('electron-is-dev')
const fs = require("fs")
const ExploitAPI = require('./JJSploitModule')

const SaveData = require('./settings')
var vars = require('./variables');
const analytics = require('./wrappers/analytics')

if(isDev && !fs.existsSync("./resources")) fs.mkdirSync("./resources")

//Useful execute actions to hide from anticheat
async function checkGameRunning(){
	//Wait until a game is opened. Checks every second
	await new Promise((resolve, reject) => {
		let interval = setInterval(function(){
			let inGame = ExploitAPI.GetProcessIDByName("RobloxPlayerBeta.exe") != 0
			if(inGame) {
				clearInterval(interval)
				resolve()
			}
		}, 1000)
	})

	/* Game detected! Consider auto-atttach here or something */

	//Wait until the game closes
	await new Promise((resolve, reject) => {
		let interval = setInterval(function(){
			let inGame = ExploitAPI.GetProcessIDByName("RobloxPlayerBeta.exe") != 0
			if(!inGame) {
				clearInterval(interval)
				resolve()
			}
		}, 1000)
	})

	/* Game closed! Maybe do cleanup here */

	//Restart the check so it runs forever. Aka loop
	checkGameRunning()
}

// Prepare the renderer once the app is ready
app.on('ready', async () => {
	//Creating the Windows form/window
	vars.mainWindow = new BrowserWindow({
		width: 500, 
		height: 300, 
		minWidth: 500,
		minHeight: 300,
		frame: false,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: false, //Makes the preload.js stuff too complicated if true
			preload: join(__dirname, 'preload.js'),
		},
		allowRendererProcessReuse: true,
		devTools: isDev //Dev tools only allowed in development
	})

	var mainWindow = vars.mainWindow

	//Loads content into the mainWindow
	mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${join(__dirname, '../build/index.html')}`);

	//Waits for the mainWindow to finish loading
	mainWindow.webContents.on('did-finish-load', async () => {
		//Force opens YouTube channels, but only once. Hopefully they will sub? c:
		if(!("forcedOpenedChannels" in SaveData())){
			shell.openExternal("https://www.youtube.com/c/Omnidev_");
			shell.openExternal("https://www.youtube.com/channel/UC3YNONzSHPW12m3AT48fMHw?view_as=subscriber");
			SaveData({forcedOpenedChannels: true})
			analytics.trackEvent("Misc", "Force opened YouTube channels")
		}

		if(!("agreementAgreed" in SaveData())){
			mainWindow.webContents.send('message', {changePage: "Agreement"});
		}

		//Anonymous tracking just says the form has launched
		analytics.trackEvent("Attach Form", "Launched interface", "Interface has loaded")

		//Downloads required files, autoupdater
		require('./bootstrapper')()

		//Loads topmost setting
		mainWindow.setAlwaysOnTop(SaveData().ui.topMost);
		mainWindow.webContents.send('message', {topMost: SaveData().ui.topMost});
		mainWindow.webContents.send('message', {version: app.getVersion()});
		
		//Starts checking if the exploit is injected
		require('./attachcheck').StartChecking()

		//Starts checking if the game closed
		//checkGameClosed()
	})

	//Sets links to open on the client's default browser
	mainWindow.webContents.on('new-window', function(e, url) {
		e.preventDefault();
		shell.openExternal(url);

		//So we can see what links are being opened
		analytics.trackEvent("Misc", "Opened external link", url)
    });
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)

// listen the channel `message`
const ElectronIPC = require('./eipc')
ipcMain.on('message', ElectronIPC)