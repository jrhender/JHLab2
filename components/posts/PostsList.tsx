import { useEffect, useState } from 'react'
import PostPreview from './PostPreview'
import { fetchEntries } from './postsAPI'
import { Entry } from 'contentful'

const layoutStyle = {
  margin: 20,
};

function PostsList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
      console.log(allPosts)
    }
    getPosts()
  }, [])

  let lastUpdatedSort = (a: Entry<any>, b: Entry<any>) => {
    return a.sys.updatedAt <= b.sys.updatedAt ? 1 : -1
  }

  return (
    <div style={layoutStyle}>
      <h2>Recent Blog Posts</h2>
      {posts.length > 0
        ? posts.sort(lastUpdatedSort).map(p => (
            <PostPreview
              alt={p.fields.alt}
              lastUpdatedDate={p.sys.updatedAt}
              date={p.fields.date}
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