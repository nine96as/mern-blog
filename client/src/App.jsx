import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import './App.css'
import { UserContextProvider } from './contexts/UserContext'
import { NavBar } from './layout'
import * as Pages from './pages'

const App = () => {
  return (
    <UserContextProvider>
      <Toaster richColors closeButton />
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Pages.HomePage />} />
          <Route path='/login' element={<Pages.LoginPage />} />
          <Route path='/register' element={<Pages.RegisterPage />} />
          <Route path='/create' element={<Pages.CreatePostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
