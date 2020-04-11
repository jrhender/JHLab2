import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchEntryByTitle } from '../../components/posts/postsAPI'
import { Entry } from 'contentful'
import Layout from '../../components/Layout'

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
    <Layout>
      <p>Post: {title}</p>
      <p>Alt: {post == undefined ? "not loaded" : post.fields.alt}</p>
    </Layout>
  )
}

export default Post