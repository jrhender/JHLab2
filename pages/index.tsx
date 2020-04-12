import Layout from '../components/Layout'
import PostsList from '../components/posts/PostsList'
import AboutMe from '../components/AboutMe'

function HomePage() {
  return (
    <Layout>
      <AboutMe />
      <PostsList />
    </Layout>
  )
}

export default HomePage