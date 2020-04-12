import { useRouter } from 'next/router'
import Post from '../../components/posts/Post'
import Layout from '../../components/Layout'

const BlogPage = (props) => {
  return (
    <Layout>
      <Post title={props.title as string} />
    </Layout>
  )
}

BlogPage.getInitialProps = ({ query }) => ({
  key: query.title,
  title: query.title
})

export default BlogPage