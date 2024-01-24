import './App.css';
import { Post } from './components';
import { NavBar } from './layout';

const App = () => {
  return (
    <main>
      <NavBar />
      <Post />
      <Post />
      <Post />
    </main>
  );
};

export default App;
