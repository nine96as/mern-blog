import React, { useState } from 'react'

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:3000/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    if (response.ok) {
      alert(`Registration successful`)
    } else {
      alert(`Registration failed`)
    }
  }

  return (
    <form className='register' onSubmit={handleSubmit}>
      <h1>register</h1>
      <input
        className='register'
        type='text'
        required
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='register'
        type='password'
        required
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='register'>register</button>
    </form>
  )
}

export default RegisterPage
