# node-log-utils

A logging utility for Node.js applications with customizable log levels and formats.

## Installation

Install the package using npm:

```sh
npm install node-log-utils
```

## Usage
Import and create an instance of the Logger class:

```js
import Logger from 'node-log-utils';

const logger = new Logger({
  logFile: 'app.log',
  consoleOutput: true,
  fileOutput: true,
  timestamp: true
});

logger.info('This is an info message');
logger.warning('This is a warning message');
logger.error('This is an error message');
logger.debug('This is a debug message');
```

## Configuration Options
The `Logger` class accepts an optional configuration object:

- `logFile` (string): The file where logs will be saved (default: `'app.log'`).
- `consoleOutput` (boolean): Whether to output logs to the console (default: `true`).
- `fileOutput` (boolean): Whether to output logs to a file (default: `true`).
- `timestamp` (boolean): Whether to include timestamps in log messages (default: `true`).

## Log Levels
The logger supports four log levels:
- `info`: General information messages.
- `warning`: Warning messages.
- `error`: Error messages.
- `debug`: Debug messages.

## Customizing Log Levels
You can add more log levels by extending the Logger class:
```js
import Logger from 'node-log-utils';
import chalk from 'chalk';

class CustomLogger extends Logger {
  constructor(options) {
    super(options);
    this.levels.custom = chalk.magenta;
  }

  custom(message) {
    this.log('custom', message);
  }
}

const customLogger = new CustomLogger({
  logFile: 'custom.log',
  consoleOutput: true,
  fileOutput: true,
  timestamp: true
});

customLogger.custom('This is a custom log message');
```

## Example
```js
import Logger from 'node-log-utils';

const logger = new Logger({
  logFile: 'myapp.log',
  consoleOutput: true,
  fileOutput: true,
  timestamp: true
});

logger.info('Application started');
logger.warning('This is a warning message');
logger.error('An error occurred');
logger.debug('Debugging info');

logger.info('Another info message with a longer text to show the formatting in the log file and console output.');
```

## Running Tests
To run the tests, use the following command:
```sh
npm test
```
The tests will ensure that the logger behaves as expected and logs messages correctly.

## License
This project is licensed under the MIT License. See the [LICENSE]('https://github.com/expressjs/express/blob/HEAD/LICENSE') file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgments
- [Chalk]('https://github.com/chalk/chalk') for console styling.
- [Mocha]('https://mochajs.org/') and [Chalk]('https://github.com/chalk/chalk') for testing.