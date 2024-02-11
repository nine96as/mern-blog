import fs from 'fs'
import { Post } from '../models/Post.js'

export const create = async (req, res) => {
  try {
    const { originalname, path } = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = `${path}.${ext}`

    fs.renameSync(path, newPath)

    const { title, summary, content } = req.body
    const { userId } = req.user

    const result = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      userId,
    })

    res.status(201).json(result)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
