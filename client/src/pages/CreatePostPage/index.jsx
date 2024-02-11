import { BlockNoteView, useBlockNote } from '@blocknote/react'
import '@blocknote/react/style.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const CreatePostPage = () => {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [file, setFile] = useState('')
  const [content, setContent] = useState([])
  const navigate = useNavigate()

  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      setContent(editor.topLevelBlocks)
    },
  })

  const handleCreatePost = async (e) => {
    e.preventDefault()

    const data = new FormData()
    data.set('title', title)
    data.set('summary', summary)
    data.set('file', file)
    data.set('content', JSON.stringify(content))

    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: data,
      credentials: 'include',
    })

    if (response.ok) {
      toast.success(`post created`)
      navigate('/')
    } else {
      toast.error(`post creation failed`)
    }
  }

  return (
    <form onSubmit={handleCreatePost} className='create'>
      <div className='create-metadata'>
        <input
          type='title'
          required
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='summary'
          required
          placeholder='summary'
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <div className='create-content'>
        <BlockNoteView editor={editor} theme={'light'} />
      </div>

      <button>create</button>
    </form>
  )
}

export default CreatePostPage
