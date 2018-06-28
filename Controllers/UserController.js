var service = require('../services/UserService');

exports.getUsers = function(req, res){
    return service.getAllUsers(req, res);
}

exports.getUsersByParam = function(req, res){
    options = req.query;
    return service.getUsersByParam(req, res, options);
}

exports.addUser = function(req, res){
    data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    return service.addUser(req, res);
}

exports.deleteUser = function(req, res){
    options = req.query;
    return service.deleteUser(req, res);
}

exports.updateUser = function(req, res){
    id = req.query;
    data = req.body;
    return service.updateUser(req, res);
}