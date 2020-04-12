import { useEffect, useState } from 'react'
import { fetchEntryByTitle } from '../../components/posts/postsAPI'
import { Entry } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Post = (props) => {
  const title = props.title
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
    postMarkup = <p></p>
  }
  else {
    console.log(title)
    postMarkup =
      <>
        <h1>{title}</h1>
        <p>{post.fields.date}</p>
        <div>{documentToReactComponents(post.fields.body)}</div>
      </>
  }

  return (
    <div style={layoutStyle}>
      {postMarkup}
    </div>
  )
}

export default Post