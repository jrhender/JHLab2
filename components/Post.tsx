function Post({ alt, date, image, imageAttribution, title, url }) {
    return (
      <div className="container">
        <a href={url}>
          <img title={imageAttribution} alt={alt} src={image} />
        </a>
        <div className="text">
          <h2>{title}</h2>
          <h4>{date}</h4>
        </div>
        <style jsx>{`
          .container {
            cursor: pointer;
            height: 453px;
            margin-bottom: 48px;
          }
          a {
            border-bottom: none;
          }
          a:hover {
            border-bottom: none;
          }
          .text {
            margin-top: -60px;
            padding: 24px;
            position: absolute;
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
            height: 50%;
            width: auto;
          }
        `}</style>
      </div>
    )
  }
  
  export default Post