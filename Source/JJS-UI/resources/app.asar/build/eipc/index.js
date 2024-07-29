//Electron IPC
const { app } = require('electron')
const fs = require("fs")

const SaveData = require('../settings')
const analytics = require('../wrappers/analytics')
const WindowsPlayer = require('./windowsplayer.js')

//const ExploitAPI = require('../JJSploitModule')
const ToggleTopWindow = require('./toggletopwindow')
const AttachExploit = require('./attach')
const StoredLuaScript = require('./storedluascript')
const vars = require('../variables')

// This func is used as the callback for ipcMain.on('message',...
module.exports = function(event, message) {
	switch(message.action){
		case "exitapp":
			//Close the app
			app.quit()
			break
		case "fixroblox":
			/*The function returns true if found a single roblox process and killed, otherwise false.
			Repeat until false to assume all occurances of Roblox are closed. Hacky :D*/
			//while (ExploitAPI.KillRoblox()){}
			break
		case "toggletopwindow":
			ToggleTopWindow()
			break
		case "attach":{
			AttachExploit()
			analytics.trackEvent("Injector", "Inject Main Module")
			break
		}
		case "unlockedApp":
			SaveData({lastKeyCompletion: new Date()})
			break;
		case "openluafile": {
			var filePath = message.filePath
			fs.readFile(filePath, 'utf8', function(err, data) {
				if (err) throw err;
				vars.mainWindow.webContents.send('luainput', data);
			});
			break;
		}
		case "storedluascript":
			StoredLuaScript(message);
			break;
		case "luascript":
			//ExploitAPI.SendLuaScript(message.script)
			//ExploitAPI.SMTNP("WeAreDevsPublicAPI_Lua", message.script || message.data)
			WindowsPlayer.sendScript(message.script)
			break;
		case "luacscript":
			//ExploitAPI.SendLuaScript(message.script)
			//ExploitAPI.SMTNP("WeAreDevsPublicAPI_LuaC", message.script || message.data)
			WindowsPlayer.sendScript(message.script)
			break;
		case "agreementagree":
			vars.mainWindow.webContents.send('message', {changePage: "Attach"});
			SaveData({agreementAgreed: true})
			break;
	}
}