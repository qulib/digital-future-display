import React from "react"

const Card = ({ node }) => (
  <article className="card">
      <figure className="card-thumbnail">

        <img
          src={
            node.featured_media.localFile.childImageSharp.resize.src
          }
          alt={node.featured_media.alt_text}
        />
      </figure>
      <main>
        <h3 className="card-title">{node.title}</h3>
        <div
          className="card-content"
          dangerouslySetInnerHTML={{ __html: node.excerpt }}
        />
      </main>

  </article>
)

export default Card;