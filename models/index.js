// This file is used to connect to mongoose
var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

// Allows to use promise syntax, rather than using external promise library
mongoose.Promise = Promise;

// Exporting the todo.js file to get the Todo model
module.exports.Todo = require('./todo');