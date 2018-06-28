var service = require('../services/CommentService');

exports.getComment = function(req, res){
    return service.getAllComments(req, res);
}

exports.getCommentsById = function(req, res){
    options = req.query;
    return service.getCommentsByParam(req, res, options);
}

exports.addComment = function(req, res){
    data = {
        name: req.body.name,
        time: Date.now(),
        commentBody: req.body.commentBody,
        user: req.body.user,
        post: req.body.post
    };
    return service.addComment(req, res, data);
}

exports.deleteComment = function(req, res){
    options = req.query
    return service.deleteComment(req, res);
}

exports.updateComment = function(req, res){
    id = req.query;
    data = req.body;
    return service.updateComment(req, res);
}