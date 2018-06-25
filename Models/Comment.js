var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
    name: String,
    time: Date,
    commentBody: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},//indicates the user making the comment
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
})

module.exports = mongoose.model('Comment', CommentSchema);