var model = require('../Models/User');

exports.addUser = function(req, res){
    var data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    model.create(data, function(err){
        if(err) res.json({err: err, message: 'the user could not be created'});
        res.json({message: 'the user was created successfully'});
    });
}

exports.getUsers = function(req, res){
    model.find(function(err, users){
        if(err) res.json({err: err, message:'something went wrong'});
        res.json(users);
    })
}
