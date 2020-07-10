import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import styled from "styled-components"

import Layout from "../components/layout"

const SatisIslemleri = () => {
  const data = useStaticQuery(graphql`
    query {
      ComponentImage: file(relativePath: { eq: "kitchen.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout className="pageLayout" pageTitle="Satis İslemleri">
      <h3>Satis İslemleri</h3>
      <Img fluid={data.ComponentImage.childImageSharp.fluid} />
      <div>
        <h6>1. Evi Satışa Hazırlama</h6>
        <p>
          Evinizi satışa çıkarmadan önce yapmanız gereken ilk işlem, gerekli
          tadilatları ve evinize değer katacağını düşündüğünüz işlemleri
          yaptırmak, başkalarının görmesini istemediğiniz kişisel ve değerli
          eşyalarınızı ortadan kaldrimak ve evi detaylı bir şekilde temizlemek
          olmalıdır. Alanında profesyonel ekip arkadaslarim ile hazırlık
          aşamasında her türlü desteği bizden alabilirsiniz.
        </p>
      </div>

      <div>
        <h6>2. Evi Fiyatlandırma</h6>
        <p>
          Piyasa şartlarına ve son aylar içerisinde satılmış olan benzer evlerin
          fiyatlarına bakıp, fiyatlandırma stratejileri göz önünde
          bulundurularak, emlak danışmanınız evinizin satışı için fiyat
          önerilerinde bulunur.
        </p>
      </div>

      <div>
        <h6>3. Pazarlama</h6>
        <p>
          Fiyat belirlenip eviniz sistemde yer aldıktan sonra, iş geliyor en
          önemli kısım olan pazarlamaya. Benimle çalışırken bu konu hakkında hiç
          bir tereddüte sahip olamanıza gerek olmayacaktır, çünkü eve özel
          pazarlama planım ve sosyal ve dijital medya kampanyalarım ile eviniz
          ideal alıcısı olabilecek yüzlerce kişinin gözleri önüne çıkacaktır.
        </p>
      </div>
      <div>
        <h6>4. Potansiyel Alıcı Ziyaretleri</h6>
        <p>
          Bu aşamada önerim, mümkün olduğunca esnek olup, evi görmek isteyen
          kişilerin randevu taleplerine uymanız yönündedir.
        </p>
      </div>
      <div>
        <h6>5. Tekliflerin Değerlendirilmesi</h6>
        <p>
          Teklif değerlendirilmesi ya bereber belirlenen bir günde ya da teklif
          geldikçe yapılır. Toronto marketinde yüksek rağbet gören alanlardaki
          evlerde strateji olarak en yaygın olan tekliflerin belirlenmiş bir
          günde kabul edilip değerlendirilmesi, dolayısıyla da birden fazla
          teklif alınması ve evin liste fiyatının oldukça üstüne satılmasıdır.
          Teklif aldığınızda olası senaryolar; teklifi kabul etmek, bazı
          şartları değiştirerek karşı tarafın değerlendirmesi için geri
          göndermek ya da reddetmek şeklindedir.
        </p>
      </div>
    </Layout>
  )
}

export default SatisIslemleri
