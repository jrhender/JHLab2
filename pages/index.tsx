import Layout from '../components/Layout'
import PostsList from '../components/posts/PostsList'
import { fetchEntries } from '../components/posts/postsAPI'
import AboutMe from '../components/AboutMe'

function HomePage(props) {
  return (
    <Layout>
      <AboutMe />
      <PostsList posts={props.posts}/>
    </Layout>
  )
}

HomePage.getInitialProps = async () => {
  const posts = await fetchEntries();
  return { posts: posts }
}

export default HomePage