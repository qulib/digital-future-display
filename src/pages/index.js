import React, { Component } from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Slide from "../components/slide"
import "../styles/style.scss"

class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0
    }
  }

  goToPrevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
    console.log(this.state.currentIndex)
  }

  goToNextSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
    console.log(this.state.currentIndex)
  }

  render() {
    const data = this.props.data;

    return (
      <div className="slider">
        <Helmet htmlAttributes={{ lang: "en" }}>
          <meta charSet="utf-8" />
          <title>Digital Futures</title>
        </Helmet> 

        {data.allWordpressPost.edges.map(({ node }) => (
          <Slide key={node.slug} node={node} />
        ))}

        <button onClick={this.goToPrevSlide}>Prev</button>
        <button onClick={this.goToNextSlide}>Next</button>

      </div>
    )
  }
}

export default Slider

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
              resize(width: 800) {
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