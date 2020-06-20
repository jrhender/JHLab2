//Code taken from https://github.com/contentful/rich-text/issues/61#issuecomment-475999852
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from "react";
import styles from './Post.module.css'

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file.contentType
      const mimeGroup = mimeType.split('/')[0]

      switch (mimeGroup) {
        case 'image':
          return <div>
            <img className={styles.image}
              title={title}
              alt={description}
              src={file.url}
              style={{maxWidth:'100%'}}
            />
            <p className={styles.imageCaption}>{description}</p>
          </div>
        default:
          return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
      }
    }
  }
}

const ContentfulRichText = function(text){
  return documentToReactComponents(text, richTextOptions)
}

export default ContentfulRichText