import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Post } from './components';
import { NavBar } from './layout';

const App = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <NavBar />
            <Post />
            <Post />
            <Post />
          </main>
        }
      />

      <Route path='/login' element={<div>login</div>} />
    </Routes>
  );
};

export default App;
