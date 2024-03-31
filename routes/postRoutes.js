const router = require('express').Router();
const loggingMiddleware = require('../middleware/middleware')
const {getPost, addPost, assignPost, deletePost} = require('../controllers/postController');




router.get('/', getPost)
router.post('/', addPost)
router.put('/:title', assignPost)
router.delete('/:title', deletePost)

module.exports = router;



