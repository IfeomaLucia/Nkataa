var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    email: {Type: String, unique: true},
    password: String
})