var repository = require('../repositories/CommentRepository');

exports.getAllComments = function(req, res){
    repository.get({}, function(err, comments){
        if(err) res.json({err: err, message: 'Sorry, something went wrong'});
        res.json(comments);
    });  
}

exports.addComment = function(req, res){
    repository.add(data, function(err){
        if(err) res.json(err);
        res.json('User created successfully');
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