// Create web server using express
// Create a router for the comment
// Create a controller for the comment
// Create a model for the comment
// Create a view for the comment

var express = require('express');
var router = express.Router();
var controller = require('../controllers/comment.controller');

router.get('/', controller.index);
router.post('/', controller.postCreate);

module.exports = router;

