import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Slider from 'react-slick'
import 'typeface-open-sans'

import Slide from '../components/Slide.jsx'
import '../styles/style.scss'

class Home extends Component {
  render() {
    const data = this.props.data

    const settings = {
      fade: true,
      lazyLoad: true,
      slidesToShow: 1,
      autoplay: true,
      pauseOnHover: false,
      infinite: true,
      speed: 4000,
      autoplaySpeed: 10000,
    }

    return (
      <div className="slider">
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
          <title>Digital Future</title>
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
    allWordpressPost {
      edges {
        node {
          status
          title
          slug
          excerpt
          featured_media {
            alt_text
            localFile {
              childImageSharp {
                resize(width: 850, height: 850, cropFocus: CENTER) {
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
