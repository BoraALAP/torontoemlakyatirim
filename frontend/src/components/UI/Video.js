import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
  iframe{
    width: 100%;
    min-height: 250px;
  }
`

const Video = (props) => {
  return (
    <Container className={props.className}>
      <iframe src={props.src} title={props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
    </Container>
  )
}

export default Video
