import { Router } from 'express'
import multer from 'multer'
import { create, index, show } from '../controllers/posts.js'
import { authenticateToken } from '../middleware/auth.js'

const postRouter = Router()

const uploadMiddleware = multer({ dest: 'uploads/' })

postRouter.get('/', index)
postRouter.get('/:id', show)
postRouter.post('/', authenticateToken, uploadMiddleware.single('file'), create)

export default postRouter
