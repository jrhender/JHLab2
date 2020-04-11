import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetchEntryByTitle } from '../../components/posts/postsAPI'
import { Entry } from 'contentful'
import Post from '../../components/posts/Post'
import Layout from '../../components/Layout'

const BlogPage = () => {
  const router = useRouter()
  const { title } = router.query

  const [post, setPost] = useState<Entry<any>>()

  useEffect(() => {
    async function getPosts() {
      const post = await fetchEntryByTitle(title as string)
      console.log(post)
      setPost(post)
    }
    getPosts()
  }, [])

  let postMarkup
  if (post == undefined) {
    postMarkup = <p>not loaded</p>
  }
  else {
    postMarkup = <Post title={title as string} post={post} />
  }

  return (
    <Layout>
      {postMarkup}
    </Layout>
  )
}

BlogPage.getInitialProps = ({query}) => ({
  key: query.title
})

export default BlogPage