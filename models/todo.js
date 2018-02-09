// logic for creating todo schema
var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
   name: {
       type: String,
       required: 'Name cannot be blank!'
   },
   completed: {
       type: Boolean,
       default: false
   },
   created_date: {
       type: Date,
       default: Date.now
   }
});

// Compile schema into a model
var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
// name
// completed
// created date