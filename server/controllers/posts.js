import fs from 'fs'
import { Post } from '../models/Post.js'

export const index = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', ['username'])
      .sort({ createdAt: -1 })
      .limit(10)
    res.status(200).json(posts)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

export const show = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id).populate('author', ['username'])
    res.status(200).json(post)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

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
      author: userId,
    })

    res.status(201).json(result)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
