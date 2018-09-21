import React from 'react'

const Slide = ({ node }) => (
  <div className="slide">

    <figure className="slide-image">
      <img 
        src={node.featured_media.localFile.childImageSharp.resize.src}
        alt={node.featured_media.alt_text}
      />
    </figure>

    <main>
      <h3 className="slide-title">{node.title}</h3>
      <div className="slide-excerpt" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </main>

  </div>
)

export default Slide