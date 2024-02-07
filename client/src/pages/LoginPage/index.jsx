import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: 'include',
    })

    if (response.ok) {
      response.json().then((user) => {
        setUser(user)
        navigate('/')
      })
    } else {
      alert(`Login failed`)
    }
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h1>login</h1>
      <input
        className='login'
        type='text'
        required
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='login'
        type='password'
        required
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='login'>login</button>
    </form>
  )
}

export default LoginPage
