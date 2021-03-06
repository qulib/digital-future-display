import React from 'react'

const Slide = ({ node }) => (
  <>
    {node.status === 'publish' ? null : console.log('not published')}
    <div className="slide">
      <figure className="slide-image">
        <img
          src={node.featured_media.localFile.childImageSharp.resize.src}
          alt={node.featured_media.alt_text}
        />
      </figure>

      <main>
        <h3
          className="slide-title"
          dangerouslySetInnerHTML={{ __html: node.title }}
        />

        <div
          className="slide-excerpt"
          dangerouslySetInnerHTML={{ __html: node.excerpt }}
        />
      </main>
    </div>
  </>
)

export default Slide
