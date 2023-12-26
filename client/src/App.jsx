import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './layout';
import * as Pages from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Pages.HomePage />} />
        <Route path='/login' element={<Pages.LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
