var express = require('express');
var router = express.Router();
var postController = require('../Controllers/PostController');

/* GET users listing. */

router.get('/', postController.getPost);
router.post('/create', postController.addPost);
router.get('/search/', postController.getPostsByParam);
router.get('/delete/', postController.deletePost);
router.post('/update/', postController.updatePost);

module.exports = router;
