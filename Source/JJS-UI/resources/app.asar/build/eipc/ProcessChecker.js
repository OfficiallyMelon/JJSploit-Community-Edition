const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);
const { app } = require('electron');
const vars = require('../variables');

class ProcessChecker {
  static async isRobloxRunning() {
    try {
      const { stdout } = await execPromise('tasklist');
      return stdout.toLowerCase().includes('roblox');
    } catch (error) {
      console.error('Error executing tasklist:', error);
      return false;
    }
  }

  static async isInjectRunning() {
    try {
      const { stdout } = await execPromise('tasklist');
      return stdout.toLowerCase().includes('celery');
    } catch (error) {
      console.error('Error executing tasklist:', error);
      return false;
    }
  }

  static async checkProcesses() {
    const robloxRunning = await this.isRobloxRunning();
    const injectRunning = await this.isInjectRunning();

    if (!robloxRunning || !injectRunning) {
      vars.mainWindow.webContents.send('message', {changePage: "Attach"});
    }
  }

  static startMonitoring(interval = 500) { // interval in milliseconds
    setInterval(() => {
      this.checkProcesses();
    }, interval);
  }
}

module.exports = ProcessChecker;
