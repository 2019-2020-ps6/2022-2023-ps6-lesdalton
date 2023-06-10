const fs = require('fs');
const path = require('path');

class Logger {
  constructor(logFilePath) {
    this.logFilePath = logFilePath;
  }

  log(message) {
    const logMessage = `[${new Date().toISOString()}] ${message}\n`;
    fs.appendFile(this.logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
    });
  }
}

const logFilePath = path.join(__dirname, 'app.log');
const logger = new Logger(logFilePath);

module.exports = logger;