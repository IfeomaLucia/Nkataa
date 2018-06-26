var express = require('express');
var router = express.Router();
var userController = require('../Controllers/UserController');

/* GET users listing. */
router.post('/create', userController.addUser);

router.get('/', userController.getUsers);

router.get('/delete/:id', userController.deleteUser);

router.get('/search/:key/:value', userController.getUserByParam);

module.exports = router;
