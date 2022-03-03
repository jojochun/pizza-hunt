const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>   to add comment to a pizza
router.route('/:pizzaId')
    .post(addComment);

// /api/comments/<pizzaId>/<commentId>  to remove a comment need two parameters 
router.route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);


module.exports = router;
