// All of the todo routes

var express = require('express');
// Express router allows one to break out routes into modular chunkcs
var router = express.Router();
// require the models from the model directory
var db = require("../models");
var helpers = require("../helpers/todos");


router.route('/')
    // Retrieve all todos
    .get(helpers.getTodos)
    // create new todo with Post request
    .post(helpers.createTodo);

router.route("/:todoId")
    // Find a specific todo
    .get(helpers.getTodo)
    // Update a todo with a PUT request
    .put(helpers.updateTodo)
    // Delete a todo with a DELETE request
    .delete(helpers.deleteTodo);

// Export the routes
module.exports = router;