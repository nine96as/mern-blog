import { Router } from 'express'
import { login, logout, profile, register } from '../controllers/users.js'
import { authenticateToken } from '../middleware/auth.js'

const userRouter = Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/logout', logout)
userRouter.get('/profile', authenticateToken, profile)

export default userRouter
