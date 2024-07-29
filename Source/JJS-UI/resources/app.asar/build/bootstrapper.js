const fs = require('fs');
const path = require('path');
const axios = require('axios');
const download = require('download');
const isDev = require('electron-is-dev');

var vars = require('./variables');
const DownloadFile = require('./wrappers/downloadfile')
const ExploitAPI = require('./JJSploitModule');
const SaveData = require('./settings');
const analytics = require('./wrappers/analytics')
const os = require('os');

vars.modulePath = path.resolve(vars.resourcesPath, "../", "exploit-main.dll")
vars.CeleryPath = path.resolve(vars.resourcesPath, '../')
vars.celeryTempPath = path.resolve(os.tmpdir(), 'celery');

//Fetch latest data
var firstFail = false
function GetLatestData(){
    return new Promise((resolve, reject) => {
        //Fetch latest information
        axios.get('https://github.com/OfficiallyMelon/JJSploit-Binaries/raw/main/ServerData/latestdata.txt')
        .then(res => { if(typeof res.data === "object") resolve(res.data) })
        //Fallback to reading the Github backup if the site is down
        .catch(async e => {
            console.warn("Using fallback update checker")
            return await axios.get('https://raw.githubusercontent.com/WeAreDevs-Official/backups/master/latestdata.txt')
            .then(res => {
                if(typeof res.data === "object") {
                    vars.mainWindow.webContents.send('message', {"showMessageBox": {
                        subject: "Warning", 
                        text: "The GitHub Repo has been either removed/taken down or blocked by your Internet."
                    }});
                    resolve(res.data)
                }
            })
            //Even the backup failed. Notify client of total failure then retry
            .catch(e => {
                //Ensures the notice of failure only displays once
                if(!firstFail){ 
                    vars.mainWindow.webContents.send('message', {"showMessageBox": {
                        subject: "Warning",
                        text: "JJSploit cannot reach github, please wait..."
                    }});
                    firstFail = true
                }

                //Retries the update check
                setTimeout(() => {
                    resolve(GetLatestData())
                }, 5000)
            })
        })
    })
}

//Autoupdater & Downloads commonly missing depedencies such as when deleted by anti-virus
//To be used only at the start of the window
module.exports = async function(){
    //Its important we have latest data before everything else
    vars.latestData = await GetLatestData();
    //Removed some old API dep downloads
    //Sets announcement message on the UI's launch page
    vars.UpdateEnabled = false;
    var serverMessage = vars.latestData.ui.servermessage || "No announcements..."
    vars.mainWindow.webContents.send('message', {"serverMessage": serverMessage});

    //Updates UI if this version is outdated
    if (SaveData().ui.version < vars.latestData.ui.version) {

        //If the latest installer is already downloaded, simply run it.
        //Prevents from re-downloading the same UI update
        if(
            (SaveData().DownloadedUpdateVersion == vars.latestData.ui.version) &&
            fs.existsSync(process.resourcesPath + '\\jjsploit_installer.exe')
        ){
            //Disable always on top so it doesn't hide the installer window
            vars.mainWindow.setAlwaysOnTop(false);
            vars.mainWindow.webContents.send('message', {topMost: false});
            
            //Already downloaded the latest UI update, re-launch it. The client might've exited the installer before it finished
            ExploitAPI.RunExe(process.resourcesPath + '\\jjsploit_installer.exe')
            vars.mainWindow.webContents.send('message', {"showMessageBox": {
                subject: "Error", 
                text:"Update downloaded. Please look for the installation window. Otherwise re-download from wearedevs.net if theres any issue."
            }});
        }
        //Download a new copy of the latest installer
        else{
            //Clear the record just in case
            SaveData({DownloadedUpdateVersion: undefined})

            //Download latest UI
            var installerFilePath = path.join(vars.resourcesPath, "jjsploit_installer.exe")

            //Deletes if it already exists
            if(fs.existsSync(installerFilePath)){
                fs.unlinkSync(installerFilePath);
            }

            //Start download
            await download(vars.latestData.ui.downloadurl)
            .on('downloadProgress', progress => {
                var percent = (progress.transferred / progress.total) * 100
                percent = Math.round(percent)
                vars.mainWindow.webContents.send('message', {"showMessageBox": {
                    subject: "Downloading JJSploit update", 
                    text: `Download progress: ${percent}%. Update info: ${vars.latestData.ui.updateinfo}`
                }});
            })
            .on('error', (error, body, response) => {
                vars.mainWindow.webContents.send('message', {"showMessageBox": {
                    subject: "JJSploit Update Error", 
                    text: `Failed to automatically download the JJSploit update. Make sure any anti-virus/firewall is disabled and restart JJSploit. Otherwise manually update by redownloading JJSploit from https://wearedevs.net.`
                }});
                console.error(error)
                console.error(body)
                console.error(response)

                analytics.trackEvent("UI Update", "Failed")
            })
            .then(data => {
                fs.writeFileSync(installerFilePath, data);

                analytics.trackEvent("UI Update", "Completed")
            });

            //Record that an update was downloaded so it isnt redownloaded the next time JJSploit is opened
            SaveData({DownloadedUpdateVersion: vars.latestData.ui.version})

            //I think it would be unsafe to immediate run the exe after downloading, so I added a delay
            setTimeout(function(){
                //Disable always on top so it doesn't hide the installer window
                vars.mainWindow.setAlwaysOnTop(false);
                vars.mainWindow.webContents.send('message', {topMost: false});
                
                //Starts the installer. Hopefully the client notices and continues it
                ExploitAPI.RunExe(installerFilePath)

                vars.mainWindow.webContents.send('message', {"showMessageBox": {
                    subject: "Downloaded JJSploit Update", 
                    text: "Please look for the installation window. Otherwise re-download from wearedevs.net if theres any issue."
                }});
            }, 2000);
        }
    }
    //No UI update available. Continues and re-download exploit-main.dll
    else{ 
        //Where to download it
        //Alert if the exploit is patched. Also reject downloading the update.
        if(vars.latestData.CeleryFiles.patched){
            isDev && console.log("Notify patched")
            vars.mainWindow.webContents.send('message', {"showMessageBox": {
                subject: "Error", 
                text: "The exploit has broke due to the games's weekly update. Please wait for WeAreDevs to fix JJSploit. This could be a few hours. Maybe longer if there are complications.",
            }});
        }
        //Downloads the update if exploit-main.dll doesn't exist or out of date
        else if(!fs.existsSync(vars.modulePath) || (SaveData().downloadedModuleVersion||0) > vars.latestData.CeleryFiles.version){
            isDev && console.log("Downloading module")

            //Deletes if it already existss
            if(fs.existsSync(vars.modulePath)){
                var isDeleted = await new Promise((resolve, reject)=>{
                    fs.unlink(vars.modulePath, (err) => {
                        if (err) reject(err);
                        resolve(true)
                    });
                })
                .catch(err => {
                    //Probably failed to delete. If thats the case, then the module is likely still in use by Roblox.
                    console.error("Failed to delete - ", err)
                })

                //Don't bother downloading the latest module if the current version can't be deleted
                if(isDeleted !== true) return
            }

            function removeOneDriveFromPath(p) {
                // Split the path into segments
                const segments = p.split(path.sep);
                
                // Filter out "OneDrive" segments
                const filteredSegments = segments.filter(segment => segment.toLowerCase() !== 'onedrive');
                
                // Rejoin the filtered segments into a new path
                let newPath = path.join(...filteredSegments);
                
                // Ensure the path ends with a backslash (on Windows)
                if (process.platform === 'win32' && !newPath.endsWith(path.sep)) {
                    newPath += path.sep;
                }
                
                return newPath;
            }

            //probably a better way to make these lmao
            if(!fs.existsSync(vars.celeryTempPath)){
                fs.mkdirSync(vars.celeryTempPath, { recursive: true });
                fs.mkdirSync(path.join(vars.celeryTempPath, 'workspace'), { recursive: true });
                fs.writeFileSync(path.join(vars.celeryTempPath, 'autolaunch.txt'), 'false');
                fs.writeFileSync(path.join(vars.celeryTempPath, 'callback.txt'), '');
                fs.writeFileSync(path.join(vars.celeryTempPath, 'celeryhome.txt'), '');
                fs.writeFileSync(path.join(vars.celeryTempPath, 'CeleryLog.txt'), '');
                fs.writeFileSync(path.join(vars.celeryTempPath, 'launchargs.txt'), '');
                fs.writeFileSync(path.join(vars.celeryTempPath, 'myfile.txt'), '');
                fs.writeFileSync(path.join(vars.celeryTempPath, 'robloxexe.txt'), '');
            }
            fs.writeFileSync(path.join(vars.celeryTempPath, 'celeryhome.txt'), removeOneDriveFromPath(path.join(vars.modulePath, "../")));
            await DownloadFile(vars.latestData.CeleryFiles.CeleryInject_exe, path.resolve(vars.CeleryPath, "CeleryInject.exe"))
            await DownloadFile(vars.latestData.CeleryFiles.CeleryIn_Bin, path.resolve(vars.CeleryPath, "CeleryIn.bin"))
            await DownloadFile(vars.latestData.CeleryFiles.CeleryScript_Bin, path.resolve(vars.CeleryPath, "CeleryScript.bin"))
            //Record that an update was downloaded so it isnt redownloaded the next time JJSploit is opened
            SaveData({downloadedModuleVersion: vars.latestData.CeleryFiles.CeleryInject_exe.version})
        }
    }
}