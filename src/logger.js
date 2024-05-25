import fs from 'fs';
import chalk from 'chalk';

class Logger {

  constructor({ logFile = 'app.log', consoleOutput = true, fileOutput = true, timestamp = true } = {}) {
    this.logFile = logFile;
    this.consoleOutput = consoleOutput;
    this.fileOutput = fileOutput;
    this.timestamp = timestamp;
    this.levels = {
      info: chalk.blue,
      warning: chalk.yellow,
      error: chalk.red,
      debug: chalk.green
    };
  }

  log(level, message) {
    if (!this.levels[level]) {
      throw new Error(`Invalid log level: ${level}`);
    }

    const timestamp = this.timestamp ? `[${new Date().toISOString()}]` : '';
    const formattedMessage = `${timestamp} [${level.toUpperCase()}] ${message}`;

    if (this.consoleOutput) {
      console.log(this.levels[level](formattedMessage));
    }

    if (this.fileOutput) {
      fs.appendFileSync(this.logFile, formattedMessage + '\n', 'utf8');
    }
  }

  
  info(message) {
    this.log('info', message);
  }

  warning(message) {
    this.log('warning', message);
  }

  error(message) {
    this.log('error', message);
  }

  debug(message) {
    this.log('debug', message);
  }
}

export default Logger;