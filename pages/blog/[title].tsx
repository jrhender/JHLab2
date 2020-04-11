import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchEntryByTitle } from '../../components/posts/postsAPI'
import { Entry } from 'contentful'

const Post = () => {
  const router = useRouter()
  const { title } = router.query

  const [post, setPost] = useState<Entry<any>>()

  useEffect(() => {
    async function getPosts() {
      const post = await fetchEntryByTitle(title as string)
      setPost(post)
    }
    getPosts()
  }, [])

  return (
    <div>
      <p>Post: {title}</p>
      <p>Alt: {post == undefined ? "not loaded" : post.fields.alt}</p>
    </div>
  )
}

export default Post