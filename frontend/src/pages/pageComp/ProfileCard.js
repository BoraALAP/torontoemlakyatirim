import React from 'react';

import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'

import styled from 'styled-components'
import Button from '../../components/UI/Button';

import Media from '../../theme/Media';

const Container = styled.div`
display:grid;  
grid-gap: ${props => props.theme.margin};
@media ${Media.tablet} {
    grid-template-columns: 1fr 2fr;
    grid-gap: calc(${props => props.theme.margin});
    justify-self: center;
    display: grid;
    align-items: center;
  }
`

const ImgContainer = styled(Img)`
  border-radius: 50%;
  margin-bottom: ${props => props.theme.gutter};
  max-width: 60vw;
  @media ${Media.tablet} {
    margin-bottom: 0;
  }
`

const TextContainer = styled.div`
  max-width: 600px;
`

const ProfileCard = () => {
  const data = useStaticQuery(graphql`
    query {
      ComponentImage: file(relativePath: { eq: "profileImage.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return(
    <Container>
      <ImgContainer fluid={data.ComponentImage.childImageSharp.fluid} />
      <TextContainer>
      <h3>Gökçe Zeren, B.Sc.</h3>
      <h6>Lisanslı Toronto Emlak Danışmanı</h6>
      <p>Merhaba! Ben Gökçe Zeren. Toronto’nun yüksek karlı emlak marketinde alım, satım ya da yatırımla ilgileniyorsanız doğru yerdesiniz. Modern ve yenilikçi bakış açım ve alanında profesyonel ekip arkadaşlarımın desteği ile Toronto emlak sektörüne dair tüm işlemlerinizde bütün bir emlak hizmet paketi sunuyorum. Websitemi gezin, beni tanıyın ve birlikte çalışabileceğimizi düşünüyorsanız çekinmeden bana ulaşın!</p>
      <Link to="/BeniTaniyin"><Button text="Beni Tanıyın" /></Link>
      </TextContainer>
    </Container>
  )
}

export default ProfileCard

