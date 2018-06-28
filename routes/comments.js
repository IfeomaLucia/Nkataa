var express = require('express');
var router = express.Router();
var commentController = require('../Controllers/CommentController');

/* GET users listing. */
router.get('/', commentController.getComment);
router.post('/create', commentController.addComment);
router.get('/search/', commentController.getCommentsById);
router.get('/delete/', commentController.deleteComment);
router.post('/update/', commentController.updateComment);

module.exports = router;
