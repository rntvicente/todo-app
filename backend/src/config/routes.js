const express = require('express');

const service = require('../api/todo/todo-service');

const routes = (server) => {
  const router = express.Router();
  server.use('/api', router);

  service.register(router, '/todos');
};

module.exports = routes;
