const vars = require('./variables')
const SaveData = require('./settings')
const ExploitAPI = require('./JJSploitModule')

var firstChecker = true

module.exports = {
    attached: false,
    AttachEnabled: function(){
        //Manually set the attached state to true and send the message to change the page to "General"
        module.exports.attached = true
        var mainWindow = vars.mainWindow
        mainWindow.webContents.send('message', {changePage: "General"});
    }
}
