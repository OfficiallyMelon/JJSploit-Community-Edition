const isDev = require('electron-is-dev');
const path = require('path');

module.exports = {
    mainWindow: null,
    latestData: null,
    resourcesPath: isDev ? path.resolve(__dirname, "../resources") : process.resourcesPath
}