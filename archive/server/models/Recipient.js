const mongoose = require('mongoose');
const {Schema} = mongoose;

const recipientSchema = new Schema({
  email: String,
  ticked: {type: Boolean, default: false}
});

module.exports = recipientSchema;