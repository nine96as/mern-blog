import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Post } from './components';
import { NavBar } from './layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Post />} />
        <Route path='/login' element={<div>login</div>} />
      </Route>
    </Routes>
  );
};

export default App;
