import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import Navigation from "./Navigation"
import styled from "styled-components"
import Media from "../theme/Media"

import Menu from "../images/icons/Menu-icon.svg"
import Close from "../images/icons/Close-icon.svg"
import Phone from "../images/icons/phone-icon.svg"
import Email from "../images/icons/Email-icon.svg"
import Logo from "../images/gzlogo.jpg"

import Social from "./UI/Social"

// import Amplify from "aws-amplify"
// import aws_exports from "../aws-exports"
// Amplify.configure(aws_exports)

const HeaderContainer = styled.header`
  display: grid;
  z-index: 30;
  position: fixed;
  width: 100vw;
  height: 100px;
  top: 0;
  box-sizing: border-box;
  @media ${Media.laptop} {
    height: inherit;
  }
`

const MainBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.color.white};
  padding: calc(${props => props.theme.gutter} / 2)
    calc(${props => props.theme.gutter} * 2);
  z-index: 40;
  box-sizing: border-box;
  h1 {
    margin: 0;
  }
  img {
    display: grid;
    max-height: 95px;
  }
`

const ButtomContainer = styled.div`
  display: none;
  a {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: start;
    grid-gap: 8px;
  }
  p {
    margin: 0;
  }
  @media ${Media.laptop} {
    display: grid;
  }
`

const MobileButton = styled.div`
  display: grid;
  @media ${Media.laptop} {
    display: none;
  }
`

const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState(false)

  const MenuToggle = async () => {
    setMenu(!menu)
    console.log(menu)
  }

  useEffect(() => {
    menu
      ? document.body.classList.add("modalOpen")
      : document.body.classList.remove("modalOpen")
  }, [menu])

  return (
    <HeaderContainer>
      <MainBar>
        <h1>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </h1>
        <Social />

        <MobileButton onClick={MenuToggle}>
          {menu ? (
            <img className="icon" alt="Close Icon" src={Close} />
          ) : (
            <img className="icon" alt="Menu Icon" src={Menu} />
          )}
        </MobileButton>
        <ButtomContainer>
          <a href="tel:+16479943542" rel="nofollow">
            <img className="icon" alt="Phone Icon" src={Phone} />
            <p>+1 (647) 994-3542</p>
          </a>
          <a href="mailto:gokcezeren@gmail.com">
            <img className="icon" alt="Email Icon" src={Email} />
            <p>gokcezeren@gmail.com</p>
          </a>
        </ButtomContainer>
      </MainBar>
      <Navigation show={menu} modalToOpen={MenuToggle} />
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
