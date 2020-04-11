import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Post = (props) => {
  let post = props.post
  return (
    <div style={layoutStyle}>
      <h1>{props.title}</h1>
      <>
        <p>{post.fields.date}</p>
        <div>{documentToReactComponents(post.fields.body)}</div>
      </>
    </div>
  )
}

export default Post