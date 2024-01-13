require('dotenv').config();
const pino = require('pino');
const path = require('path');

const pinoConfig = {
    targets: [{
        level: 'info',
        target: 'pino-pretty',
        options: {
            singleLine: false,
        }
    }, {
        level: 'trace',
        target: 'pino/file',
        options: { destination: path.join(__dirname, '..', 'tmp', 'app.log')}
    }]
}

if (process.env.PRETTY_LOGGING === '1') {
    pinoConfig.targets[0].options.singleLine = true
}

const logger = pino(pino.transport(pinoConfig));

module.exports = { logger }