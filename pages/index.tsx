import Head from 'next/head'
import Header from '../components/Header'
import PostsList from '../components/PostsList'

function HomePage() {
  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      <Header/>
        <h2>Recent Posts</h2>
      <PostsList/>
    </>
  )
}

export default HomePage