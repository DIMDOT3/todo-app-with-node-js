// This file is used to connect to mongoose
var mongoose = require('mongoose');
var url = process.env.DATABASEURL || 'mongodb://localhost/todo-api';
mongoose.set('debug', true);
mongoose.connect(url);

// Allows to use promise syntax, rather than using external promise library
mongoose.Promise = Promise;

// Exporting the todo.js file to get the Todo model
module.exports.Todo = require('./todo');