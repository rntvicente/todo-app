const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');

const allowsCors = require('./cors');

const server = express();
const port = process.env.PORT || 3000;

server.use(morgan('tiny'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(allowsCors);

server.listen(port, () => {
  debug(`Listing on port ${chalk.green(port)}.`);
});

module.exports = server;
