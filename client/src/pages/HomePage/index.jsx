import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Post } from '../../components'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/posts').then((res) => {
      if (res.ok) {
        res.json().then((data) => setPosts(data))
      } else {
        toast.error(`failed to fetch posts`)
      }
    })
  }, [])

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} {...post} />)
      ) : (
        <p>no posts yet...</p>
      )}
    </>
  )
}

export default HomePage
