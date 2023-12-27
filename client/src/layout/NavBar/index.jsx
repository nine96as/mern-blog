import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/users/profile', {
      credentials: 'include'
    }).then((res) =>
      res.json().then(({ username }) => {
        setUsername(username);
      })
    );
  }, []);

  const handleClick = async () => {
    fetch('http://localhost:3000/users/logout', {
      method: 'POST',
      credentials: 'include'
    });
    setUsername('');
  };

  return (
    <main>
      <header>
        <Link to='/' className='logo'>
          MyBlog
        </Link>
        <nav>
          {username && (
            <>
              <Link to='create'>Create new post</Link>
              <a onClick={handleClick}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

export default NavBar;
