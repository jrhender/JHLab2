function Post({ alt, date, image, imageAttribution, title, url }) {
    return (
      <div className="container">
        <div>
          <a href={url}>
            <img title={imageAttribution} alt={alt} src={image} />
          </a>
        </div>
        <div className="text">
          <h2>{title}</h2>
          <h4>{date}</h4>
        </div>
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 200px;
            margin-bottom: 48px;
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
    )
  }
  
  export default Post