import { useEffect, useState } from 'react'
import { Entry } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './Post.module.css'

const Post = (props) => {
  let postMarkup
  let post = props.post
  if (post == undefined) {
    postMarkup = <p></p>
  }
  else {
    postMarkup =
      <>
        <h1>{post.fields.title}</h1>
        {/* <p>Created: {post.sys.createdAt.split('T')[0]}</p> */}
        <p>Last updated: {post.sys.updatedAt.split('T')[0]}</p>
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