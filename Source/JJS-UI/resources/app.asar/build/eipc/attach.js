const fs = require('fs');
const path = require('path');
const vars = require('../variables');
const analytics = require('../wrappers/analytics');
const WindowsPlayer = require('./windowsplayer');

module.exports = function() {
    const pid = WindowsPlayer.GetProcessIDByName("RobloxPlayerBeta.exe");
    if (!pid) {
        vars.mainWindow.webContents.send('message', {
            "showMessageBox": {
                subject: "Error",
                text: "JJSploit did not find Roblox. Make sure a game is opened! A game must have been launched from the Roblox website. The Windows Store version is not supported."
            }
        });
        analytics.trackEvent("Injector", "Failed to find Roblox");
        return;
    }

    // Retrieve actual process info for Roblox
    const pinfo = { process: { killed: false, pid: pid } };

    // Attempt to inject player
    const injectStatus = WindowsPlayer.injectPlayer(pinfo);

    // Handle various injection statuses with message boxes
    switch (injectStatus) {
        case 'ALREADY_INJECTING':
            vars.mainWindow.webContents.send('message', {
                "showMessageBox": {
                    subject: "Info",
                    text: "JJSploit is already injecting."
                }
            });
            break;
        case 'ALREADY_INJECTED':
            vars.mainWindow.webContents.send('message', {
                "showMessageBox": {
                    subject: "Info",
                    text: "JJSploit is already injected."
                }
            });
            break;
        case 'ROBLOX_NOT_FOUND':
            vars.mainWindow.webContents.send('message', {
                "showMessageBox": {
                    subject: "Error",
                    text: "Roblox was not found. Make sure a game is opened from the Roblox website."
                }
            });
            break;
        case 'SUCCESS':
            vars.mainWindow.webContents.send('message', {
                "showMessageBox": {
                    subject: "Success",
                    text: "JJSploit has successfully injected."
                }
            });
            break;
        default:
            vars.mainWindow.webContents.send('message', {
                "showMessageBox": {
                    subject: "Error",
                    text: "An unknown error occurred during injection."
                }
            });
            break;
    }

    console.log(`Injection status: ${injectStatus}`);
};
