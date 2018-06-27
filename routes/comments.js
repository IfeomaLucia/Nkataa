var express = require('express');
var router = express.Router();
var commentController = require('../Controllers/CommentController');

/* GET users listing. */
router.post('/create', commentController.addComment);

router.get('/', commentController.getComments);

// router.get('/:id', commentController.getCommentsByPostId);

router.get('/delete/:id', commentController.deleteComment);

router.post('/update/:id', commentController.updateComment);

module.exports = router;
