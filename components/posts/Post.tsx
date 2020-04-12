import { useEffect, useState } from 'react'
import { fetchEntryByTitle } from '../../components/posts/postsAPI'
import { Entry } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './Post.module.css'

const Post = (props) => {
  const title = props.title
  const [post, setPost] = useState<Entry<any>>()

  useEffect(() => {
    async function getPosts() {
      const post = await fetchEntryByTitle(title as string)
      setPost(post)
    }
    getPosts()
  }, [])

  let postMarkup
  if (post == undefined) {
    postMarkup = <p></p>
  }
  else {
    postMarkup =
      <>
        <h1>{title}</h1>
        <p>{post.fields.date}</p>
        <div>{documentToReactComponents(post.fields.body)}</div>
      </>
  }

  return (
    <div className={styles.container}>
      {postMarkup}
    </div>
  )
}

export default Post