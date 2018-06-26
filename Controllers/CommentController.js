var model = require('../Models/Comment');

exports.addComment = function(req, res){
    var data = {
        name: req.body.name,
        time: Date.now(),
        commentBody: req.body.commentBody,
        user: req.body.user
    };
    model.create(data, function(err){
        if(err) res.json({err: err, message:'Comment could not be created'});
        res.json({message:'Comment was created successfully'});
    });
}

exports.getComments = function(req, res){
    model.find(function(err, comments){
        if(err) res.json({err: err, message:'something went wrong'});
        res.json(comments);
    });
}

exports.deleteComment = function(req, res){
    var options = {_id: req.params.id};
    model.remove(options, function(err){
        if(err) res.json({err: err, message: 'the resource could not be deleted'});
        res.json({message: 'the comment was deleted'});
    });
}

exports.updateComment = function(req, res){
    var id = req.params.id;
    var update = {
        commentBody: req.body.commentBody
    };
    model.findByIdAndUpdate(id, update, function(err){
        if(err) res.json({err: err, message: 'Update error'});
        res.json({message: update});
    });
}