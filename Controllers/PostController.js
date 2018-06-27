var service = require('../services/PostService');

exports.getPost = function(req, res){
    return service.getAllPosts(req, res);
}

exports.addPost = function(req, res){
    data = {
        time: Date.now(),
        postBody: req.body.postBody,
        user: req.body.user
    };
    return service.addPost(req, res);
}

exports.deletePost = function(req, res){
    options = req.query
    return service.deletePost(req, res);
}
