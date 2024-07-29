const fs = require('fs');
const path = require('path');

const ExploitAPI = require('../JJSploitModule');
const vars = require('../variables');
const WindowsPlayer = require('./windowsplayer.js')
var scriptsPath = path.resolve(__dirname, "../luascripts")

module.exports = function(message){
    fs.readFile(scriptsPath + "\\" + message.data.filename, "utf8", function(err,content){ //Original
        if(err) { 
            vars.mainWindow.webContents.send('message', {"showMessageBox": {
                subject: "error", 
                text: "Script file not found!"
            }});
            
            throw err;
        };

        //ExploitAPI.SendLuaScript(content);
        ExploitAPI.SMTNP("WeAreDevsPublicAPI_Lua", content);
        WindowsPlayer.sendScript(content)
    });
}