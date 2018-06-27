var express = require('express');
var router = express.Router();
var userController = require('../Controllers/UserController');

/* GET users listing. */
router.post('/create', userController.addUser);

router.get('/', userController.getUsers);

router.get('/delete/', userController.deleteUser);

router.get('/search/', userController.getUsersByParam);

router.post('/update/', userController.updateUser);

module.exports = router;
