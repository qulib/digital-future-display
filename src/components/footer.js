import React from "react"
import QULlogo from "../images/qul-logo-long.png"

const Footer = () => (
  <footer id="site-footer">
    <a title="Queen's University Library" href="https://library.queensu.ca">
      <img id="qul-logo" src={QULlogo} alt="Queen's University Library" />
    </a>
    <aside className="site-contact">
      <p>Phone: (877) 209-5641</p>
      <p>
        Email:{" "}
        <a
          title="Email Bracken Library"
          href="mailto:bracken.library@queensu.ca"
        >
          bracken.library@queensu.ca
        </a>
      </p>
    </aside>
  </footer>
)

export default Footer
