import React, { useContext, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import './style.css'

const NavBar = () => {
  const { user, setUser } = useContext(UserContext)
  const username = user?.username

  useEffect(() => {
    fetch('http://localhost:3000/users/profile', {
      credentials: 'include',
    }).then((res) =>
      res.json().then((user) => {
        setUser(user)
      })
    )
  }, [setUser])

  const handleClick = async () => {
    fetch('http://localhost:3000/users/logout', {
      method: 'POST',
      credentials: 'include',
    })
    setUser(null)
  }

  return (
    <main>
      <header>
        <Link to='/' className='logo'>
          myblog
        </Link>
        <nav>
          {username && (
            <>
              <Link to='create'>create</Link>
              <a onClick={handleClick}>logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to='/login'>login</Link>
              <Link to='/register'>register</Link>
            </>
          )}
        </nav>
      </header>
      <Outlet />
    </main>
  )
}

export default NavBar
