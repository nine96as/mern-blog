import React, { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    if (!response.ok) {
      alert(`Registration failed`);
    } else {
      alert(`Registration successful`);
    }
  };

  return (
    <form className='register' onSubmit={handleSubmit}>
      <h1>Register</h1>
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
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
