const SaveData = require('../settings')
var vars = require('../variables')

module.exports = function(){
    //Get UI config
    var ui = SaveData().ui
    //Toggle topmost of UI config
    ui.topMost = !ui.topMost
    //Save new UI config
    SaveData({ui: ui})
    //Change window's alwaysontop
    vars.mainWindow.setAlwaysOnTop(ui.topMost)
    //Send message so it updates the interface
    vars.mainWindow.webContents.send('message', {topMost: ui.topMost});
}