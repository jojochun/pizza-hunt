const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>   to add comment to a pizza
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>  to remove a comment need two parameters 
router.route('/:pizzaId/:commentId').delete(removeComment);


module.exports = router;
