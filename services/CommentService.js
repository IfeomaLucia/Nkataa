var repository = require('../repositories/CommentRepository');
var postRepo = require('../repositories/PostRepository');

exports.getAllComments = function(req, res){
    repository.get({}, '',{path: 'user', select: 'name'}, {path: 'post', select: '-comments'}, function(err, comments){
        if(err) res.json({err: err, message: 'Sorry, something went wrong'});
        res.json(comments);
    });  
}

exports.getCommentsInPost = function(req, res){
    repository.get(options, '', {path: 'user', select: 'name'}, 'post', function(err, posts){
        if(err) res.json(err);
        res.json(posts);
    });
}

exports.addComment = function(req, res, data){
    repository.add(data, function(err, comment){
        postRepo.getById(data.post, function(err, post){
            post.comments.push(comment._id);
            post.save();
            if(err) res.json(err);
            res.json('Comment created successfully');
        })
    });
}

exports.deleteComment = function(req, res){
    repository.delete(options, function(err){
        if(err) res.json(err);
        res.json('The resource was deleted successfully');
    });
}

exports.updateComment = function(req, res){
    repository.update(id, data, function(err){
        if(err) res.json(err);
        res.json(data);
    })
}