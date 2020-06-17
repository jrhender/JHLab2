import contentfulRichText from './ContentfulRichText'
import styles from './Post.module.css'

const Post = (props) => {
  let post = props.post
  return (
    <div className={styles.container}>
        <h1>{post.fields.title}</h1>
        <p className={styles.dates}>First published: {post.sys.createdAt.split('T')[0]}. Last updated: {post.sys.updatedAt.split('T')[0]}.</p>
        <div>{contentfulRichText(post.fields.body)}</div>
    </div>
  )
}

export default Post