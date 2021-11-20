const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  googleID: String,
  tokens: {type: Number, default: 0}
});

mongoose.model('users', userSchema);