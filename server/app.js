import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import logger from 'morgan'

import { connectDB } from './database/connect.js'
import postRouter from './routers/posts.js'
import userRouter from './routers/users.js'

export const app = express()

const __dirname = new URL('.', import.meta.url).pathname

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))
app.use(express.json())
app.use(logger('dev'))
app.use(cookieParser())
app.use('/uploads', express.static(`${__dirname}/uploads`))

connectDB()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Blog API',
    description: 'TBC',
    endpoints: [],
  })
})

app.use('/users', userRouter)
app.use('/posts', postRouter)
