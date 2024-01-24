import './App.css';

const App = () => {
  return (
    <main>
      <header>
        <a href='' className='logo'>
          MyBlog
        </a>
        <nav>
          <a href=''>Login</a>
          <a href=''>Register</a>
        </nav>
      </header>
      <div className='post'>
        <div className='image'>
          <img
            src='https://techcrunch.com/wp-content/uploads/2023/12/CMC_7587.jpg?w=1390&crop=1'
            alt=''
          />
        </div>
        <div className='content'>
          <h2>Amazon’s new Echo Frames can’t touch the Ray-Ban Meta</h2>
          <p className='info'>
            <a className='author'>nine96as</a>
            <time>25-12-2023 16:45</time>
          </p>
          <p className='summary'>
            The new glasses feature improved sound, but still mostly fall short
          </p>
        </div>
      </div>

      <div className='post'>
        <div className='image'>
          <img
            src='https://techcrunch.com/wp-content/uploads/2023/12/CMC_7587.jpg?w=1390&crop=1'
            alt=''
          />
        </div>
        <div className='content'>
          <h2>Amazon’s new Echo Frames can’t touch the Ray-Ban Meta</h2>
          <p className='info'>
            <a className='author'>nine96as</a>
            <time>25-12-2023 16:45</time>
          </p>
          <p className='summary'>
            The new glasses feature improved sound, but still mostly fall short
          </p>
        </div>
      </div>

      <div className='post'>
        <div className='image'>
          <img
            src='https://techcrunch.com/wp-content/uploads/2023/12/CMC_7587.jpg?w=1390&crop=1'
            alt=''
          />
        </div>
        <div className='content'>
          <h2>Amazon’s new Echo Frames can’t touch the Ray-Ban Meta</h2>
          <p className='info'>
            <a className='author'>nine96as</a>
            <time>25-12-2023 16:45</time>
          </p>
          <p className='summary'>
            The new glasses feature improved sound, but still mostly fall short
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
