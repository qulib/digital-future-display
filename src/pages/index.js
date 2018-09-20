import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Card from "../components/card"

class Home extends Component {
  render() {
    const data = this.props.data;

    return (
      <Layout>
        <div className="cards">
          {data.allWordpressPost.edges.map(({ node }) => (
            <div key={node.slug}>
              <Card node={node} />
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
{
  allWordpressPost(sort: {fields: [date]}) {
    edges {
      node {
        title
        slug
        excerpt
        featured_media {
          alt_text
          localFile {
            childImageSharp {
              resize(width: 400) {
                src
              }
            }
          }
        }
      }
    }
  }
}
`