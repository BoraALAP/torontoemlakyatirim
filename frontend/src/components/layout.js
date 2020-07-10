import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { themeBase } from "../theme/theme"
import { GlobalStyle } from "../theme/GlobalStyle"
import Media from "../theme/Media"

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import FooterEmail from "../pages/pageComp/FooterEmail"
import SEO from "./seo"

const Container = styled.div``

const Main = styled.main`
  display: grid;
  margin-top: 7em;
  margin-bottom: 2em;
  grid-gap: 5vh;
  justify-content: center;
  @media ${Media.laptop} {
    margin: 10em 0 2em;
  }
`

const Sizing = styled.div`
  width: 100vw;
  box-sizing: border-box;
  padding: ${props => props.theme.margin};
`

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={themeBase}>
      <Container>
        <SEO title={pageTitle} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Sizing>
          <Main>
            {children}
            <FooterEmail />
          </Main>
        </Sizing>
        <Footer />
        <GlobalStyle />
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
