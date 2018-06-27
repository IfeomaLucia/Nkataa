var model = require('../Models/Comment');

exports.addComment = function(req, res){
    var data = {
        name: req.body.name,
        time: Date.now(),
        commentBody: req.body.commentBody,
        user: req.body.user,
        post: req.body.post
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

// exports.getCommentsByPostId = function(req, res){
//     var id = req.params.id;
//     model.findById(id, function(err, data){
//         if(err) res.json({err: err, message:'something went wrong'});
//         res.json(data);
//     });
// }

exports.deleteComment = function(req, res){
    var options = {_id: req.params.id};
    model.remove(options, function(err){
        if(err) res.json({err: err, message: 'the resource could not be deleted'});
        res.json({message: 'the comment was deleted'});
    });
}

