const restful = require('node-restful');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, require: true, default: Date.now }
});

module.exports = restful.model('Todo', schema);
