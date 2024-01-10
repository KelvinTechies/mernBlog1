import express from 'express'
import {registerUser, LoginUser, logoutUser, getUser, updateUser, deleteUser } from '../Controllers/UserController.js'
const router = express.Router()


router.post('/register', registerUser)
router.post('/login', LoginUser)
router.post('/logout', logoutUser)
router.get('/user/:user_id', getUser)
router.put('/user/:user_id', updateUser)
router.delete('/user/:user_id', deleteUser)



export default router