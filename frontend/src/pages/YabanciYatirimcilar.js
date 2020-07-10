import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import styled from "styled-components"

const Ul = styled.ul`
  display: grid;
  grid-gap: 16px;
  li {
    padding: 0 16px;
  }
`

const YabanciYatirimcilar = () => {
  const data = useStaticQuery(graphql`
    query {
      componentImage: file(relativePath: { eq: "architecture.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout className="pageLayout" pageTitle="Yabancı Yatırımcılar">
      <h3>Yabancı Yatırımcılar</h3>
      <div>
        <h6>Toronto’da Yabancı Yatırımcılar Ev Alabilir mi?</h6>
        <p>Evet!</p>
      </div>
      <div>
        <h6>Yabancı Yatırımcılar Için Emlak Alımında Ek Vergi Bulunuyor mu?</h6>
        <p>
          Evet, 2017 itibarı ile yürürlüğe girmiş olan yabancı yatırımcı
          vergisi. Toronto ve çevresinde Kanada da Göçmen ya da Vatandaş
          statüsünde olmayan kişiler yani turist, öğrenci yada çalışma vizesiyle
          bulunan kişiler ev alımı sırasında satış fiyatı üzerinden %15 Yabancı
          Yatırımcı Vergisine tabi tutulurlar.
        </p>
        <p>Ancak bu verginin iadesinin alınabileceği bazı durumlar var:</p>
        <Ul>
          <li>Eğer ev alımından sonra 4 yıl içinde göçmen statüsüne ulaşabilirseniz</li>
          <li>Öğrenci iseniz, ev alımından sonra 2 yıl full-time olarak kabul edilen okullarda eğitiminize devam ederseniz</li>
          <li>Çalışıyorsanız da legal olarak çalışma izniniz ile ev alımından sonra 1 yıl tam zamanlı çalışırsanız, vergi iadesine başvurabilirsiniz.</li>
        </Ul>
        <p>
        Birçok kişiye ilk etapta %15 extra vergi çok yüksek görünse de ev alma planını göçmenlik sonrasına atan birçok kişi bekleme süresinde evlerdeki fiyat artışının vergi miktarıyla aşağı yukarı aynı olduğunu görerek vergisini ödeyip almayı tercih ettiği oldukça sık görünüyor.
        </p>
      </div>
      <Img fluid={data.componentImage.childImageSharp.fluid} />

      <div>
        <h6>Toronto’da Yabancı Yatırımcılar Ev Alabilir mi?</h6>
        <p>Evet!</p>
      </div>

      <div>
        <h6>Ev Almak Için Kanada’da Bulunmak Zorunda Mıyım?</h6>
        <p>
          Hayır. Bir çok müşterime teknoloji yardımıyla Skype, Whatsapp vs. üzerinden ilgilendikleri evleri gösteriyorum. Teklif aşamasında tüm imza işlemleri elektronik olarak yapılıyor. Buraya gelmenizi gerektirebilecek tek durum avukat görüşmesi olabilir, ancak onu da buradaki bir avukata vekalet vererek yapmanız mümkün.
        </p>
      </div>

      <div>
        <h6>Ev Almak Için Kanada’da Bulunmak Zorunda Mıyım?</h6>
        <p>
          Hayır. Bir çok müşterime teknoloji yardımıyla Skype, Whatsapp vs. üzerinden ilgilendikleri evleri gösteriyorum. Teklif aşamasında tüm imza işlemleri elektronik olarak yapılıyor. Buraya gelmenizi gerektirebilecek tek durum avukat görüşmesi olabilir, ancak onu da buradaki bir avukata vekalet vererek yapmanız mümkün.
        </p>
      </div>

      <div>
        <h6>Aldığım Evi Kiraya Nasıl Verebilirim?</h6>
        <p>
        Yatırım amaçlı alınan evlerin kiraya verilmesi ve takip işlemleri ile ilgili her türlü konuda hizmet veriyorum.
        </p>
      </div>

    </Layout>
  )
}

export default YabanciYatirimcilar
