var model = require('../Models/Post');
var BaseRepository = require('../repositories/BaseRepository');

function PostRepository(){

}

PostRepository.prototype = BaseRepository(model);
module.exports = new PostRepository();