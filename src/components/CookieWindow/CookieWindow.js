import React from "react"
import CookieConsent from "react-cookie-consent"
import Cookie from "../../components/cookie.pdf"
import styles from "./CookieWindow.styles"

const CookieWindow = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Elfogadom"
      cookieName="taxwelloCookies"
      style={styles.container}
      buttonStyle={styles.button}
      expires={365}
      classname="cookie-window"
    >
      <p>
        A weboldal sütiket alkalmaz a nagyobb felhasználói élmény és az oldal
        hatékonyabb működtetése érdekében. A süti (cookie) szabályzatot{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={Cookie}
          style={styles.link}
        >
          itt érheted el.
        </a>
      </p>
    </CookieConsent>
  )
}

export default CookieWindow
