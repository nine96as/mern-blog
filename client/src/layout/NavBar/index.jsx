import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
    <header>
      <a href='' className='logo'>
        MyBlog
      </a>
      <nav>
        <Link to='/login'>Login</Link>
        <Link to=''>Register</Link>
      </nav>
    </header>
  );
};

export default NavBar;
