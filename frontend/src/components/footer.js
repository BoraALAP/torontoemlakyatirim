import React from "react"

import styled from "styled-components"
import Media from '../theme/Media'

import Logo from "../images/sage-logo.png"



const Footer = styled.footer`
  display: grid;
  background-color: ${props => props.theme.color.lightbg};
  padding: ${props => props.theme.margin};
  box-sizing: border-box;
  width: 100vw;
  h4{
    margin-bottom: 24px;
  }
  @media ${Media.tablet} {
    grid-template-columns: 2fr 1fr; 
  }
`

const footer = () => {

  return (
    <Footer>
      <div>
        <h4>İletişim</h4>
        <a href="mailto:gokcezeren@gmail.com"><div>
          <h6>E-posta</h6>
          <p>gokcezeren@gmail.com</p>
        </div></a>
        <a href="tel:+16479943542" rel="nofollow"><div>
          <h6>Telefon</h6>
          <p>+1 (647) 994-3542</p>
        </div></a>
      </div>

      <div>
        
        <div>
        <img src={Logo} alt="sage logo" />
          <p>
            Sage Real Estate LTD., Brokerage
            <br />
            2010 Yonge Street,
            <br />
            Toronto, ON
            <br />
            M4S 1Z9
          </p>
        </div>
      </div>
    </Footer>
  )
}

export default footer
