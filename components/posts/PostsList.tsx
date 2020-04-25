import { useEffect, useState } from 'react'
import PostPreview from './PostPreview'
import { Entry } from 'contentful'

const layoutStyle = {
};

const PostsList = (props) => {

  let lastUpdatedSort = (a: Entry<any>, b: Entry<any>) => {
    return a.sys.updatedAt <= b.sys.updatedAt ? 1 : -1
  }

  return (
    <div style={layoutStyle}>
      <h2>Recent Blog Posts</h2>
      {props.posts != null && props.posts.length > 0
        ? props.posts.sort(lastUpdatedSort).map(p => (
            <PostPreview
              alt={p.fields.alt}
              lastUpdatedDate={p.sys.updatedAt}
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