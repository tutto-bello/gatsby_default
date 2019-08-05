import React, { useState, useEffect } from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import _ from "lodash"
// import Img from "gatsby-image"
import "./Nav.scss"
import { ScrollTo } from "../ScrollTo"
import LanguageSwitch from "./LanguageSwitch"

const Nav = ({ intl }) => {
  const [menuShow, setMenuShow] = useState("")
  const [alternative, setAlternative] = useState(false)
  const btnClass = menuShow ? "navbar-toggler" : "navbar-toggler collapsed"
  const navClass = alternative
    ? "nav-container fixed-top scroll"
    : "nav-container fixed-top"

  useEffect(() => {
    window.addEventListener(
      "scroll",
      _.debounce(() => setAlternative(window.pageYOffset > 80)),
      50
    )
  }, [])

  const onMenuToggle = () => {
    setMenuShow(menuShow ? "" : "show")
    setAlternative(true)
  }

  return (
    <div className={navClass}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <ScrollTo
          className="navbar-brand"
          to="hero"
          offset={-70}
          title="Főoldal"
        >
          {/* <Img fixed={data.logo.childImageSharp.fixed} alt="Taxwello" />
          <img src={logo} alt="Taxwello" /> */}
        </ScrollTo>
        <button
          className={btnClass}
          type="button"
          onClick={() => onMenuToggle()}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ` + menuShow}>
          <div className="navbar-nav">
            <ScrollTo
              className="nav-item nav-link"
              to="hero"
              title={intl.formatMessage({ id: "nav.hero" })}
            >
              <FormattedMessage id="nav.hero" />
            </ScrollTo>
            <ScrollTo
              className="nav-item nav-link contact-link"
              to="footer"
              title={intl.formatMessage({ id: "nav.footer" })}
            >
              <FormattedMessage id="nav.footer" />
            </ScrollTo>
            <LanguageSwitch />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default injectIntl(Nav)
