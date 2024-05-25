import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import Logger from '../src/logger.js';

const logFilePath = path.join(process.cwd(), 'test.log');
const logger = new Logger({ logFile: logFilePath });

describe('Logger', () => {
  beforeEach(() => {
    if (fs.existsSync(logFilePath)) {
      fs.unlinkSync(logFilePath);
    }
  });

  it('should log info message', () => {
    logger.info('This is an info message');
    const logContents = fs.readFileSync(logFilePath, 'utf8');
    expect(logContents).to.contain('[INFO] This is an info message');
  });

  it('should log warning message', () => {
    logger.warning('This is a warning message');
    const logContents = fs.readFileSync(logFilePath, 'utf8');
    expect(logContents).to.contain('[WARNING] This is a warning message');
  });

  it('should log error message', () => {
    logger.error('This is an error message');
    const logContents = fs.readFileSync(logFilePath, 'utf8');
    expect(logContents).to.contain('[ERROR] This is an error message');
  });

  it('should log debug message', () => {
    logger.debug('This is a debug message');
    const logContents = fs.readFileSync(logFilePath, 'utf8');
    expect(logContents).to.contain('[DEBUG] This is a debug message');
  });
});
