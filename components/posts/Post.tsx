import { useEffect, useState } from 'react'
import { Entry } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './Post.module.css'

const Post = (props) => {
  let post = props.post
  return (
    <div className={styles.container}>
        <h1>{post.fields.title}</h1>
        {/* <p>Created: {post.sys.createdAt.split('T')[0]}</p> */}
        <p>Last updated: {post.sys.updatedAt.split('T')[0]}</p>
        <div>{documentToReactComponents(post.fields.body)}</div>
    </div>
  )
}

export default Post