let mongoose = require('mongoose');

// Create schema for new users
// Name and email fields are kept unique
let userSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        date: String
    }
);
  
let User = mongoose.model('User', userSchema);

module.exports = User;