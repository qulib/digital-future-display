import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle, siteSubtitle }) => (
  <header id="site-header">
    <Link to="/" title="Home">
      <span className="site-title">{siteTitle}</span>
      <span className="site-subtitle">{siteSubtitle}</span>
    </Link>
  </header>
)

export default Header
