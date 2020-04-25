import { useEffect, useState } from 'react'
import PostPreview from './PostPreview'
import { Entry } from 'contentful'

const layoutStyle = {
};

const PostsList = (props) => {

  let lastCreatedSort = (a: Entry<any>, b: Entry<any>) => {
    return a.sys.createdAt <= b.sys.createdAt ? 1 : -1
  }

  return (
    <div style={layoutStyle}>
      <h2>Recent Blog Posts</h2>
      {props.posts != null && props.posts.length > 0
        ? props.posts.sort(lastCreatedSort).map(p => (
            <PostPreview
              alt={p.fields.alt}
              lastUpdatedDate={p.sys.updatedAt}
              createdDate={p.sys.createdAt}
              key={p.fields.title}
              image={p.fields.image}
              imageAttribution={p.fields.imageAttribution}
              title={p.fields.title}
              url={p.fields.url}
            />
          ))
        : null}
    </div>
  )
}

export default PostsList