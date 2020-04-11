import { useRouter } from 'next/router'
import Post from '../../components/posts/Post'
import Layout from '../../components/Layout'

const BlogPage = () => {
  const router = useRouter()
  const { title } = router.query

  return (
    <Layout>
      <Post title={title as string} />
    </Layout>
  )
}

export default BlogPage