import React, { Component } from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Slider from "react-slick"

import Slide from "../components/slide"
import "../styles/style.scss"

class Home extends Component {

  render() {
    const data = this.props.data;

    const settings = {
      centerMode: true,
      centerPadding: '0px',
      fade: true,
      slidesToShow: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 10000,
      cssEase: "linear"
    };

    return (
      <div className="slider">
        <Helmet htmlAttributes={{ lang: "en" }}>
          <meta charSet="utf-8" />
          <title>Digital Futures</title>
        </Helmet>
        <Slider {...settings}>
          {data.allWordpressPost.edges.map(({ node }) => (
            <Slide key={node.slug} node={node} />
          ))}
        </Slider>
      </div>
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
              resize(width: 600, height: 600) {
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