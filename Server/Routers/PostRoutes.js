import express from 'express'
import {createPost, getApost, getAllPost, updatePost, sportsCatrgories, deletPost} from '../Controllers/PostController.js'
const postRoute = express.Router()


postRoute.post('/', createPost)
postRoute.get('/', getAllPost)
postRoute.get('/dashboard/blog', getAllPost)
postRoute.get('/dashboard/edit/:id', getApost)
postRoute.get('/category/:Category', sportsCatrgories)
postRoute.get('/:id', getApost)
postRoute.put('/:id', updatePost)
postRoute.delete('/:id', deletPost)


export default postRoute