var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'field cannot be empty'
  },
  completed: {
    type: Boolean,
    default: false
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;