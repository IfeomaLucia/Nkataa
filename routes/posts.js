var express = require('express');
var router = express.Router();
var postController = require('../Controllers/PostController');

/* GET users listing. */
router.post('/create', postController.addPost);

router.get('/', postController.getPost);

router.get('/delete/', postController.deletePost);

//router.post('/update/', postController.updatePost);

module.exports = router;
