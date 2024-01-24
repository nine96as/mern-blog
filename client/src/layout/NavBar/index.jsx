import React, { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './style.css';

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const username = user?.username;

  useEffect(() => {
    fetch('http://localhost:3000/users/profile', {
      credentials: 'include'
    }).then((res) =>
      res.json().then((user) => {
        setUser(user);
      })
    );
  }, [setUser]);

  const handleClick = async () => {
    fetch('http://localhost:3000/users/logout', {
      method: 'POST',
      credentials: 'include'
    });
    setUser(null);
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
