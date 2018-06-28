var repository = require('../repositories/PostRepository');
var userRepo = require('../repositories/UserRepository');

exports.getAllPosts = function(req, res){
    repository.get({}, '', {path: 'user', select: 'name'}, {path: 'comment', select: '-post'}, function(err, posts){
        if(err) res.json({err: err, message: 'Sorry, something went wrong'});
        res.json(posts);
    });  
}

exports.getPostsByParam = function(req, res, options){
    repository.get(options, '', {path: 'user', select: 'name'}, 'comments', function(err, posts){
        if(err) res.json(err);
        res.json(posts);
    });
}

exports.addPost = function(req, res, data){
    repository.add(data, function(err, post){
        userRepo.getById(data.user, function(err, user){
            user.posts.push(post._id);
            user.save();
            if(err) res.json(err);
            res.json('Comment created successfully');
        });
    });
}

exports.deletePost = function(req, res){
    repository.delete(options, function(err){
        if(err) res.json(err);
        res.json('The resource was deleted successfully');
    });
}

exports.updatePost = function(req, res){
    repository.update(id, data, function(err){
        if(err) res.json(err);
        res.json(data);
    });
}