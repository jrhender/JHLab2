import Layout from '../components/Layout'
import PostsList from '../components/posts/PostsList'

function HomePage() {
  return (
    <Layout>
      <h2>Recent Blog Posts</h2>
      <PostsList />
    </Layout>
  )
}

export default HomePage