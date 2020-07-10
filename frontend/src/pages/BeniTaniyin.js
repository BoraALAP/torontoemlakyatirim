import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "styled-components"
import Media from "../theme/Media"

import Layout from "../components/layout"

const ContentContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-gap: ${props => props.theme.gutter};
  
  @media ${Media.laptop} {
    grid-auto-flow: column;
    grid-template-columns: 1fr 2fr;
    p {
      max-width: 600px;
    }
  }
`

const BeniTaniyin = () => {
  const data = useStaticQuery(graphql`
    query {
      ComponentImage: file(relativePath: { eq: "profileImageFull.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout pageTitle="Beni Taniyin">
      
      <h3>Beni Taniyin</h3>
      <ContentContainer>
        <Img fluid={data.ComponentImage.childImageSharp.fluid} />

        <div>
          <h4>Gökçe Zeren, B.Sc.</h4>
          <h6>Lisanslı Toronto Emlak Danışmanı</h6>
          <p>
            Üniversite eğitimimi Hacettepe Üniversitesi Biyoloji bölümünde
            tamamladıktan sonra, iş hayatımın ilk adımlarını ilaç sektöründe
            bulunan çeşitli global firmaların klinik araştırma birimde attım. Bu
            süreçte Satış ve Pazarlama birimindeki bağlantılarımla olan
            görüşmelerim sayesinde bu alana olan ilgi ve yeteneğimin farkına
            vardım.
          </p>

          <p>
            Kanada’ya geldikten sonra kariyerimde değişiklik yapmaya karar verip
            asıl ilgi alanıma yönelmek için ikinci diplomamı Pazarlama Yönetimi
            alanında aldım. Mezuniyet ardından çeşitli global firmalarda
            Pazarlama ve Marka Yöneticisi olarak çalıştım. Bu süre zarfında,
            gerek eşimin ev renovasyon sektöründe çalışması, gerekse her
            ikimizin de emlak yatırımına olan ilgimiz ve aktif olarak yatırım
            yapmamız neticesiyle Emlak Danışmanlığı sertifikamı aldım.
          </p>

          <p>
            Renovasyon alanındaki inşaat ve mimarı bilgimi, Satış ve Pazarlama
            alanındaki deneyimlerimle birleştirerek sizlere gerek alım gerekse
            satış işlemleri konusunda, eşim ve alanında uzman bağlantılarım ile
            birlikte tam bir hizmet paketi sunuyoruz.
          </p>

          <p>
            Evinizin satış işlemlerinde satış ve pazarlama alanındaki uzmanlığım
            sayesinde eve özel satış stratejileri sunarken, alış işlemlerinde
            piyasa ve renovasyon sektöründeki bilgimden yola çıkarak en iyi
            pazarlığı yapıp, en karlı yatırımı yapmanıza yardımcı oluyorum.
          </p>

          <p>
            Bana göre emlak danışmanlığı, sadece alım satım işleminden çok tüm
            süreç boyunca müşteriyi bilgilendirme, bilinçli bir alım satım
            işlemi yapma ve süreç boyunca ihtiyaç duyulan her türlü konuda uzman
            desteği sağlamaktır. Toronto’da Emlak Alım ve Satış işlemleri, Emlak
            Yatırımı ve Ev Renovasyonu konusundaki her türlü sorunuz için banada
            yada <strong><i>Unique Home İmprovement</i></strong>’a ulaşabilirsiniz.
          </p>
        </div>
      </ContentContainer>
    
    </Layout>
  )
}

export default BeniTaniyin
