const download = require('download');
const fs = require('fs');
const path = require('path');

var vars = require('../variables')
const analytics = require('./analytics')

module.exports = async function(downloadURL, fileName){
    var mainWindow = vars.mainWindow

    //Aborts if it already exists
    if(fs.existsSync(fileName)) return

    await download(downloadURL)
    .on('downloadProgress', progress => {
        var percent = (progress.transferred / progress.total) * 100
        percent = Math.round(percent)
        mainWindow.webContents.send('message', {"showMessageBox": {
            subject: `Downloading ${path.basename(fileName)}`, 
            text: `Download progress: ${percent}%`
        }});
    })
    .on('error', (error, body, response) => {
        mainWindow.webContents.send('message', {"showMessageBox": {
            subject: "Module Download Error", 
            text: `Failed to download the latest exploit module for the latest version of Roblox. Make sure any anti-virus/firewall is disabled and restart JJSploit.`
        }});
        console.error(error)
        console.error(body)
        console.error(response)

        analytics.trackEvent("Module Update", "Failed")
    })
    .then(data => {
        //Moves file to the resources folder
        fs.writeFileSync(fileName, data);
        //Gets rid of the download progression bar
        mainWindow.webContents.send('message', "hideMessageBox");
    });
}