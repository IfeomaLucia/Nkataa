var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    time: Date,
    postBody: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},//refrences the user file
    comments: [{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}]//refrences the multiple comments made by a single user
})

module.exports = mongoose.model('Post', PostSchema);