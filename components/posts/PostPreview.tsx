import Link from 'next/link';

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
          <div className="container">
            <div>
              <img title={imageAttribution} alt={alt} src={image} />
            </div>
            <div className="text">
              <h2>{title}</h2>
              <h4>{date}</h4>
            </div>
            <style jsx>{`
            .container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              height: auto;
            }
            a {
              border-bottom: none;
            }
            a:hover {
              border-bottom: none;
            }
            .text {
              padding: 5px;
            }
            h2 {
              color: black;
              font-size: 24px;
              margin-bottom: 0;
            }
            h4 {
              color: black;
              font-size: 16px;
              font-weight: 500;
              margin-top: 8px;
            }
            img {
              width: auto;
            }
          `}</style>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default PostPreview