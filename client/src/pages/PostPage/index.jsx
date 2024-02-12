import { useBlockNote } from '@blocknote/react'
import '@blocknote/react/style.css'
import { formatISO9075 } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import './style.css'

const PostPage = () => {
  const [post, setPost] = useState(null)
  const editor = useBlockNote({})

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          editor
            .blocksToHTMLLossy(JSON.parse(data.content))
            .then((html) => setPost({ ...data, content: html }))
        })
      } else {
        toast.error(`failed to fetch post`)
        navigate('/')
      }
    })
  }, [])

  return (
    <>
      {post && (
        <div className='post-page'>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
          <div className='info'>
            <time>{formatISO9075(new Date(post.createdAt))}</time>
            <a className='author'>by @{post.author.username}</a>
          </div>
          <div className='image'>
            <img
              src={`http://localhost:3000/${post.cover}`}
              alt={`${post.title} cover image`}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </div>
      )}
    </>
  )
}

export default PostPage
