import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { UserContext } from '../../contexts/UserContext'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: 'include',
    })

    if (res.ok) {
      res.json().then((user) => {
        setUser(user)
        toast.success(`welcome, ${user.username}`)
        navigate('/')
      })
    } else {
      toast.error(`login failed`, {
        description: 'invalid username or password',
      })
    }
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h1>login</h1>
      <input
        type='text'
        required
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        required
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>login</button>
    </form>
  )
}

export default LoginPage
