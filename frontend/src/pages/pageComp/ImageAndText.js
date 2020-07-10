import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import styled from 'styled-components'
import Media from '../../theme/Media'

const Container = styled.div`
  display:grid;
  @media ${Media.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`

const TextBox = styled.div`
  display: grid;
  background-color: ${props => props.theme.color.accent};
  color: ${props => props.theme.color.white};
  padding: calc(${props => props.theme.gutter}*2);
  align-items: center;
  align-content: center;
  justify-content: center;
  h5{
    color: ${props => props.theme.color.white};
  }
  li{
    color: ${props => props.theme.color.white};
  }
`

const ImageAndText = () => {
  const data = useStaticQuery(graphql`
    query {
      ComponentImage: file(relativePath: { eq: "insideImage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Img fluid={data.ComponentImage.childImageSharp.fluid} />
      <TextBox>
        <h5>Servislerim:</h5>
        <ul>
          <li>Ev satın alma işlemleri</li>
          <li>Ev satışı işlemleri (eve özel pazarlama planı ile)</li>
          <li>Emlak Yatırım Danışmanlığı</li>
          <li>Ev Renovasyon Hizmetleri</li>
          <li>Yatırımcılar için mülk yönetimi</li>
        </ul>
      </TextBox>
    </Container>
  )
}

export default ImageAndText
