import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import "./Footer.scss"

export default function Footer() {
  return (
    <section id="footer">
      <div className="footer-container">
        <div className="footer-item footer-item__description">
          <div className="vizio">
            <FormattedMessage id="footer.first" tagName="p" />
            <FormattedMessage id="footer.second" tagName="p" />
          </div>
        </div>
      </div>
    </section>
  )
}
