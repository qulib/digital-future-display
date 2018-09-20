import React from "react"
import Helmet from "react-helmet"

import "../styles/style.scss"

const siteTitle = "Digital Future"

export default ({ children }) => (
  <div id="site">
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
    </Helmet>
    <div id="main">{children}</div>
  </div>
)