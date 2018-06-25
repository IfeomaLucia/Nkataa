var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]//refrences the posts for the user
})

module.exports = mongoose.model('User', UserSchema);