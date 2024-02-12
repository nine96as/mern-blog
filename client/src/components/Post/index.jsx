import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom'
import './style.css'

const Post = ({ _id, title, summary, cover, createdAt, author }) => {
  return (
    <div className='post'>
      <div className='image'>
        <Link to={`/posts/${_id}`}>
          <img
            src={`http://localhost:3000/${cover}`}
            alt={`${title} cover image`}
          />
        </Link>
      </div>
      <div className='content'>
        <Link to={`/posts/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className='info'>
          <a className='author'>{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  )
}

export default Post
