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
    fetch('http://localhost:3000/users/profile', {
      credentials: 'include',
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user))
        return
      } else if (user) {
        setUser(null)
        navigate('/login')
      }
    })
  }, [])

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
