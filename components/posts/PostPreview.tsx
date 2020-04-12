import Link from 'next/link';
import styles from './PostPreview.module.css'

const layoutStyle = {
  marginBottom: 5,
  padding: 10,
  border: '1px solid #DDD'
};

function PostPreview({ alt, date, image, imageAttribution, title, url }) {
  return (
    <div style={layoutStyle}>
      <Link href="/blog/[title]" as={`/blog/${title}`}>
        <a>
          <div className={styles.container}>
            <div className={styles.image}>
              <img title={imageAttribution} alt={alt} src={image} />
            </div>
            <div className={styles.text}>
              <h2>{title}</h2>
              <h4>{date}</h4>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PostPreview