const mongoose = require('mongoose');
const debug = require('debug')('server:database');

mongoose.Promise = global.Promise;
const uri = 'mongodb://todo:tod0app@ds231720.mlab.com:31720/todo-app';

const options = {
  useMongoClient: true,
  connectTimeoutMS: 1000
};

const database = mongoose.connect(uri, options, (err) => {
  if (err) {
    debug(err.stack);
    return;
  }

  debug('Connect database success.');
});

module.exports = database;
