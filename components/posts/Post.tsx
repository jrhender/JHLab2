import { useEffect, useState } from 'react'
import { fetchEntryByTitle } from './postsAPI'
import { Entry } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Post = (props) => {
  const [post, setPost] = useState<Entry<any>>()

  useEffect(() => {
    async function getPosts() {
      const post = await fetchEntryByTitle(props.title as string)
      setPost(post)
    }
    getPosts()
  }, [])

  let postMarkup
  if (post == undefined) {
    postMarkup = <p>not loaded</p>
  }
  else {
    postMarkup =
      <>
        <p>{post.fields.date}</p>
        <div>{documentToReactComponents(post.fields.body)}</div>
      </>
  }

  return (
    <div style={layoutStyle}>
      <h1>{props.title}</h1>
      {postMarkup}
    </div>
  )
}

export default Post