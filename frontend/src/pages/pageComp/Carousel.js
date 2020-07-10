import React, { useState, useEffect } from "react"

import { Link } from "gatsby"

import styled from "styled-components"
import Media from "../../theme/Media"
import Button from "../../components/UI/Button"

import Carousel01 from "../../images/carousel01.jpg"
import Carousel02 from "../../images/carousel02.jpg"
import Carousel03 from "../../images/carousel03.jpg"

const Slider = () => {
  const [active, setActive] = useState(0)
  const data = [
    {
      src: Carousel01,
      imgAlt: "Emlak Yatırımında Gözde Şehir Toronto",
      text: "Emlak Yatırımında Gözde Şehir Toronto",
      link: {
        type: "link",
        to: "/SatinAlmaIslemleri",
        text: "Daha Fazla Bilgi",
      },
    },
    {
      src: Carousel02,
      imgAlt: "Ücretsiz Fiyat Analizi İçin Bana Ulaşın",
      text:
        "Evinizin Bugünkü Market Koşullarındaki Değerini Merak mı Ediyorsunuz?",
      link: {
        type: "a",
        to: "mailto:gokcezeren@gmail.com",
        text: "Ücretsiz Fiyat Analizi İçin Bana Ulaşın",
      },
    },
    {
      src: Carousel03,
      imgAlt:
        "Toronto'nun Yüksek Karlı Emlak Marketinde Evinizi Birlikte Bulalım",
      text:
        "Toronto'nun Yüksek Karlı Emlak Marketinde Evinizi Birlikte Bulalım",
      link: {
        type: "a",
        to: "mailto:gokcezeren@gmail.com",
        text: "Bana Ulaşın",
      },
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (active === data.length - 1) {
        setActive(0)
      } else {
        setActive(active + 1)
      }
    }, 6000)
    return () => clearInterval(interval)
  })

  return (
    <Carousel>
      {data.map((item, index) => (
        <Slide key={index} active={active === index}>
          <Img alt={item.imgAlt} src={item.src} />
          <TextContainer>
            <h5>{item.text}</h5>
            {item.link.type === "link" ? (
              <Link to={item.link.to}>
                <Button text={item.link.text} />
              </Link>
            ) : (
              <a href={item.link.to}>
                <Button text={item.link.text} />
              </a>
            )}
          </TextContainer>
        </Slide>
      ))}
    </Carousel>
  )
}

const Carousel = styled.div`
  display: grid;
  justify-content: center;
  align-items: start;
  position: relative;
  height: 80vh;
  @media ${Media.tablet} {
  height: 50vh;
}
`
const Slide = styled.div`
  opacity: ${props => (props.active ? 1 : 0)};
  transition: 1s;
  position: absolute;
  display: grid;
  width: 100%;

`
const Img = styled.div`
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  height: 50vh;
  display: grid;
    width: auto;
`

const TextContainer = styled.div`
  background: ${props => props.theme.color.white};
  padding: 25px 25px;
  display: grid;
  z-index: 10;
  text-align: center;
  grid-gap: ${props => props.theme.gutter};
  justify-items: center;
  display: grid;
    justify-self: center;
    width: 80%;
  
  @media ${Media.tablet} {
    position: absolute;
    bottom: 25px;


  }
`

export default Slider
