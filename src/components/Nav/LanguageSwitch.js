import React, { useState } from "react"
import { changeLocale, IntlContextConsumer } from "gatsby-plugin-intl"

const LanguageSwitch = () => {
  const [langShow, setLangShow] = useState("")
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <>
          <p
            className="d-flex text-center mt-3 px-5 text-uppercase"
            id="text-switch"
          >
            {languages.map(lang => (
              <span
                style={{ borderTop: "1px solid #dee2e6" }}
                key={lang}
                className={`flex-grow-1 pt-3 ${
                  currentLocale === lang ? "purple" : ""
                }`}
                onClick={() => changeLocale(lang)}
              >
                {lang}
              </span>
            ))}
          </p>
          <div className="dropdown">
            {/* eslint-disable-next-line */}
            <a
              className="nav-item nav-link dropdown-toggle"
              href="#"
              onClick={() => setLangShow(langShow ? "" : "show")}
            >
              <span>{currentLocale}</span>
            </a>
            <div className={`dropdown-menu dropdown-menu-right ` + langShow}>
              {languages.map(lang => (
                // eslint-disable-next-line
                <a
                  key={lang}
                  className={`dropdown-item ${
                    currentLocale === lang ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => changeLocale(lang)}
                >
                  {lang}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </IntlContextConsumer>
  )
}

export default LanguageSwitch
