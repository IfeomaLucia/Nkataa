var express = require('express');
var router = express.Router();
var postController = require('../Controllers/PostController');

/* GET users listing. */
router.post('/create', postController.addPost);

router.get('/', postController.getPosts);

router.get('/delete/:id', postController.deletePost);

router.post('/update/:id', postController.updatePost);

module.exports = router;
