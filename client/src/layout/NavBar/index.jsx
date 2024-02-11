import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { UserContext } from '../../contexts/UserContext'
import './style.css'

const NavBar = () => {
  const { user, setUser } = useContext(UserContext)
  const username = user?.username
  const navigate = useNavigate()

  useEffect(() => {
    const res = fetch('http://localhost:3000/users/profile', {
      credentials: 'include',
    })

    if (res.ok) {
      res.json().then((user) => setUser(user))
    } else {
      toast.warning(`your login session has expired`)
      setUser(null)
      navigate('/login')
    }
  }, [setUser])

  const handleLogoutClick = async () => {
    fetch('http://localhost:3000/users/logout', {
      method: 'POST',
      credentials: 'include',
    })
    toast.success(`cya later, ${username}`)
    setUser(null)
    navigate('/login')
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
              <Link to='/create'>create</Link>
              <a onClick={handleLogoutClick}>logout</a>
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
