import Head from 'next/head'
import Header from '../components/header/Header'
import PostsList from '../components/PostsList'

function HomePage() {
  return (
    <>
      <Head>
        <title>JH Lab</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      <Header/>
        <h2>Recent Blog Posts</h2>
      <PostsList/>
    </>
  )
}

export default HomePage