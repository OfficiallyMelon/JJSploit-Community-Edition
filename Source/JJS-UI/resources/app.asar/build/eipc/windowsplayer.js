const { execFileSync, spawnSync, spawn, exec } = require('child_process');

const fs = require('fs');
const path = require('path');
const { dialog } = require('electron'); // Assuming you're using Electron
const attachcheck = require('../attachcheck.js');
const vars = require('../variables')
vars.CeleryPath = path.resolve(vars.resourcesPath, '../')

class WindowsPlayer {
  static runLegacyInjector = true;
  static injectFileName = 'celerywindows.bin';
  static lastProcInfo = null;
  static injectorProc = null;
  static postInjectedMainPlayer = [];
  static isInjectingMainPlayer = false;

  static isInjected() {
    if (WindowsPlayer.injectorProc && WindowsPlayer.lastProcInfo) {
      try {
        return !WindowsPlayer.injectorProc.killed && !WindowsPlayer.lastProcInfo.process.killed;
      } catch (err) {
        if (err instanceof Error) {
          return false;
        } else {
          throw err;
        }
      }
    }
    return false;
  }

  static sendScript(source) {
    const tempPath = path.join(require('os').tmpdir(), 'celery', 'myfile.txt');
    fs.writeFileSync(tempPath, source);
  }

  static executeAsAdmin(fileName, args) {
    const process = spawn('cmd.exe', ['/c', fileName, ...args], {
      detached: true,
      stdio: 'inherit'
    });
    process.unref(); // Allow the parent process to exit while keeping the child process running
    return process;
  }

  static injectPlayer(pinfo) {
    if (WindowsPlayer.isInjectingMainPlayer) return 'ALREADY_INJECTING';
    if (WindowsPlayer.isInjected()) return 'ALREADY_INJECTED';
    WindowsPlayer.isInjectingMainPlayer = true;

    // Check if Roblox is running by looking for the window title (simplified)
    const robloxRunning = WindowsPlayer.isRobloxRunning();
    if (!robloxRunning) {
      WindowsPlayer.isInjectingMainPlayer = false;
      return 'ROBLOX_NOT_FOUND';
    }

    WindowsPlayer.injectorProc = WindowsPlayer.runLegacyInjector
      ? WindowsPlayer.executeAsAdmin(path.join(vars.CeleryPath, 'CeleryInject.exe'), ['-abc213']):

    WindowsPlayer.lastProcInfo = pinfo;
    WindowsPlayer.isInjectingMainPlayer = false;
    attachcheck.AttachEnabled();
    return 'SUCCESS';
  }

  static async isRobloxRunning() {
    try {
      const { stdout } = await execPromise('tasklist');
      return stdout.toLowerCase().includes('roblox');
    } catch (error) {
      console.error('Error executing tasklist:', error);
      return false;
    }
  }
  static getInjectedProcesses() {
    const injectedProcesses = [];
    if (WindowsPlayer.isInjected()) {
      injectedProcesses.push(WindowsPlayer.lastProcInfo);
    }
    return injectedProcesses;
  }

  static GetProcessIDByName(processName) {
    try {
      const result = execFileSync('tasklist', ['/FI', `IMAGENAME eq ${processName}`], { encoding: 'utf8' });
      const lines = result.split('\n');
      for (let line of lines) {
        if (line.includes(processName)) {
          const parts = line.trim().split(/\s+/);
          return parseInt(parts[1]);
        }
      }
      return null;
    } catch (error) {
      console.error('Failed to get process ID by name:', error);
      return null;
    }
  }
}

module.exports = WindowsPlayer;
