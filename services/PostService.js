var repository = require('../repositories/PostRepository');

exports.getAllPosts = function(req, res){
    repository.get({}, function(err, users){
        if(err) res.json({err: err, message: 'Sorry, something went wrong'});
        res.json(users);
    });  
}

exports.getPostsByParam = function(req, res, options){
    repository.get(options, function(err, users){
        if(err) res.json(err);
        res.json(users);
    });
}

exports.addPost = function(req, res){
    repository.add(data, function(err){
        if(err) res.json(err);
        res.json('User created successfully');
    });
}

exports.deletePost = function(req, res){
    repository.delete(options, function(err){
        if(err) res.json(err);
        res.json('The resource was deleted successfully');
    });
}