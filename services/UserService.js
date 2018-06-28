var repository = require('../repositories/UserRepository');

exports.getAllUsers = function(req, res){
    repository.get({}, '-password', 'posts', '', function(err, users){
        if(err) res.json({err: err, message: 'Sorry, something went wrong'});
        res.json(users);
    });  
}

exports.getUsersByParam = function(req, res, options){
    repository.get(options, '-password', 'posts', '', function(err, users){
        if(err) res.json(err);
        res.json(users);
    });
}

exports.addUser = function(req, res){
    repository.add(data, function(err){
        if(err) res.json(err);
        res.json('User created successfully');
    });
}

exports.deleteUser = function(req, res){
    repository.delete(options, function(err){
        if(err) res.json(err);
        res.json('The resource was deleted successfully');
    });
}

exports.updateUser = function(req, res){
    repository.update(id, data, function(err){
        if(err) res.json(err);
        res.json(data);
    })
}