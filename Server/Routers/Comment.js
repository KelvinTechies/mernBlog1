import express from 'express'
import {createComment, getCommentForaPost} from '../Controllers/CommentController.js'

const commentRouter = express.Router()

commentRouter.post('/comment/:post_id', createComment)
commentRouter.get('/details/:postId', getCommentForaPost)


export default commentRouter