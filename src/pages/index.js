import React from "react"
import { graphql } from "gatsby"
import { Nav, Hero, Footer, CookieWindow } from "../components/"
import SEO from "../components/seo"
import "../style/index.scss"

const IndexPage = ({ data }) => (
  <>
    <SEO title="Gatsby Default" />
    <Nav data={data} />
    <Hero />
    <Footer />
    <CookieWindow />
  </>
)

export default IndexPage

export const query = graphql`
  {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
