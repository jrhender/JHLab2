import { fetchEntryByTitle, fetchEntries } from '../../components/posts/postsAPI'
import Post from '../../components/posts/Post'
import Layout from '../../components/Layout'

const BlogPage = (props) => {
  return (
    <Layout>
      <Post post={props.post} />
    </Layout>
  )
}

BlogPage.getInitialProps = async ({ query }) => {
  let post = await fetchEntryByTitle(query.title)
  return { post: post }
}

export default BlogPage