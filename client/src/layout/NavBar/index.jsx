import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
    <main>
      <header>
        <Link to='/' className='logo'>
          MyBlog
        </Link>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to=''>Register</Link>
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

export default NavBar;
