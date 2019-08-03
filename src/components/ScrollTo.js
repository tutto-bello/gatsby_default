import React from "react"
import { Link } from "react-scroll"

const ScrollTo = ({ to, title, className, children, offset = -150 }) => (
  <Link
    className={className}
    // activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={offset}
    duration={700}
    title={title}
    href=""
  >
    {children}
  </Link>
)

export { ScrollTo }
