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

  return (
    <div style={layoutStyle}>
      <h2>{props.title}</h2>
      <p>{post == undefined ? "not loaded" : documentToReactComponents(post.fields.body)}</p>
    </div>
  )
}

export default Post