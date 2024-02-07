import React from 'react'
import { Editor } from '../../components'
import './style.css'

const CreatePost = () => {
  return (
    <form className='create'>
      <div className='create-metadata'>
        <input className='create' type='title' placeholder='title' />
        <input className='create' type='summary' placeholder='summary' />
        <input className='create' type='file' name='' id='' />
      </div>
      <div className='create-body'>
        <Editor />
      </div>

      <button className='create'>create</button>
    </form>
  )
}

export default CreatePost
