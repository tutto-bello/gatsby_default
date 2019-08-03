import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import { ScrollTo } from "../ScrollTo"
import "./Hero.scss"

const Hero = ({ intl }) => {
  return (
    <section id="hero" className="lazy">
      <div className="hero-container">
        <FormattedMessage id="hero.firstLine">
          {txt => (
            <h1 className="review">
              {txt}
              <FormattedMessage id="hero.secondLine" />
            </h1>
          )}
        </FormattedMessage>
        <FormattedMessage id="hero.about">
          {txt => <p className="hero--about">{txt}</p>}
        </FormattedMessage>
        <p className="hero--contact">
          <FormattedMessage id="hero.contact">
            {txt => (
              <ScrollTo
                to="form"
                title={intl.formatMessage({ id: "hero.contact" })}
              >
                {txt}
              </ScrollTo>
            )}
          </FormattedMessage>
        </p>
      </div>
    </section>
  )
}

export default injectIntl(Hero)
