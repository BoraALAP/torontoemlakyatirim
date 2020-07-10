import React from 'react'

import styled from 'styled-components'

import Youtube from '../../images/icons/youtube.svg'
import Facebook from '../../images/icons/facebook.svg'
import Instagram from '../../images/icons/instagram.svg'

const Container = styled.div`
display: grid;
grid-auto-flow:column;
padding: 16px 0px;
justify-content: start;
grid-gap: 24px;
img{
  width:24px;
  height:24px;
}
`

const Social = () => {
  return (
    <Container>
      <a href="https://www.facebook.com/torontoemlakyatirim/" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="facebook icon" /></a>
      <a href="https://www.instagram.com/toronto_realestate_agent/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="instagram icon" /></a>
      <a href="https://www.youtube.com/channel/UCP6waf9kEKdTjeIHNdXjkXA" target="_blank" rel="noopener noreferrer"><img src={Youtube} alt="youtube icon" /></a>
    </Container>
  )
}

export default Social
