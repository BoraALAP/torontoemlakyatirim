import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Media from "../theme/Media"

import Phone from "../images/icons/phone-icon.svg"
import Email from "../images/icons/Email-icon.svg"

const Menu = styled.nav`
  display: grid;
  background-color: ${props => props.theme.color.white};
  z-index: 15;
  padding: calc(${props => props.theme.gutter} / 2)
    ${props => props.theme.gutter} ${props => props.theme.margin};
  top: 0;
  box-sizing: border-box;
  transition: 1s ease all;
  transform: translateX(110vw);
  text-align: center;
  box-shadow: 0px 3px 6px ${props => props.theme.color.lightOpacity};
  &.active {
    transform: translateX(0vw);
  }

  @media ${Media.laptop}{
    transform: translateX(0vw);
    grid-auto-flow: column;
    padding: 0 ${props => props.theme.gutter};
    box-shadow: none;
    border-bottom: 1px solid ${props => props.theme.color.border};
  }
`

const StyledLink = styled(Link)`
  border-bottom: 1px solid ${props => props.theme.color.border};
  padding: calc(${props => props.theme.gutter});
  align-content: center;
  text-align: left;
  @media ${ Media.laptop }{
    padding: 16px 24px;
    display: grid;
    justify-self: center;
    border-bottom: none;
    text-align: center;
  }
`
const ALink = styled.a`
  border-bottom: 1px solid ${props => props.theme.color.border};
  padding: calc(${props => props.theme.gutter});
  align-content: center;
  text-align: left;
  @media ${ Media.laptop }{
    padding: 16px 24px;
    display: grid;
    justify-self: center;
    border-bottom: none;
    text-align: center;
  }
`

const ButtomContainer = styled.div`
  display: grid;
  padding: calc(${props => props.theme.gutter});
  a {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: start;
    grid-gap: 8px;
  }

  @media ${ Media.laptop }{
    display:none;
  }
`

const Navigation = props => {
  return (
    <Menu className={props.show ? "active" : ""}>
      <StyledLink to="/">Anasayfa</StyledLink>
      <StyledLink to="/BeniTaniyin">Beni Tanıyın</StyledLink>
      <ALink href="https://gracezeren.com/property-search" target="_blank">
        Ev Arama
      </ALink>
      <StyledLink to="/SatinAlmaIslemleri">Satın Alma İşlemleri</StyledLink>
      <StyledLink to="/SatisIslemleri">Satış İslemleri</StyledLink>
      <StyledLink to="/YabanciYatirimcilar">Yabancı Yatırımcılar</StyledLink>
      <StyledLink to="/TorontoSemtleri">Toronto Semtleri</StyledLink>
      <ButtomContainer>
        <a href="tel:+16479943542" rel="nofollow">
          <img className="icon" alt="Phone Icon" src={Phone} />
          <p>+1 (647) 994-3542</p>
        </a>
        <a href="mailto=gokcezeren@gmail.com">
          <img className="icon" alt="Email Icon" src={Email} />
          <p>gokcezeren@gmail.com</p>
        </a>
      </ButtomContainer> 
    </Menu>
  )
}

export default Navigation
