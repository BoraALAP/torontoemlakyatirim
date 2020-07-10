import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Button from "../components/UI/Button"

import Layout from "../components/layout"
import styled from "styled-components"

const Ul = styled.ul`
  display: grid;
  grid-gap: 16px;
  li {
    padding: 0 16px;
  }
`

const SatinAlmaIslemleri = () => {
  const data = useStaticQuery(graphql`
    query {
      ComponentImage: file(relativePath: { eq: "architecture.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout className="pageLayout" pageTitle="Satin Alma Islemleri">
      <div>
        <h3>Satın Alma İşlemleri</h3>
        <p>
          Öncelikle belirtmek isterim ki Toronto’da ev satın alma süreci
          Türkiye’dekinden oldukça farklı. Birinci fark, ev alırken alıcılar
          emlak danışmanlarına herhangi bir komisyon ödemesi yapılmıyor. Emlak
          danışmanlarının ödemesi her zaman evini satan kişi tarafından yapılıp,
          alıcının danışmanı ile satıcının danışmanı arasında paylaştırılıyor.
          İkinci büyük fark ise burada portföy sisteminin olmaması. Burada emlak
          danışmanları tarafından listelenen tüm evler MLS adı verilen tek bir
          sisteme konuluyor, ve her emlak danışmanı bu sistemdeki evleri alıcı
          müşterileri ile paylaşabiliyor. Dolayısıyla birden fazla danışman ile
          bağlantıda olmak size farklı seçenekler sunmayacaktır.
        </p>
        <p>
          Toronto’ya yeni gelmiş kişilerin en çok şikayet ettiği konulardan
          birisi de ev kiralarının çok yüksek olmasıdır. Bir süre sonra,
          kiracılar fark eder ki aslında kira olarak ödedikleri miktar ev
          sahiplerinin ev kredisi taksitleridir. Durum böyle olunca, peşinat
          miktarını ödeyebilecek kişiler bir an önce markete girip ev alma
          çabasına girerler. Zira akıllıca yapılmış yatırımlarda, kredi faiz
          oranlarının oldukça düşük olması nedeniyle, aylık ödemeler çoğunlukla
          o evi kiralasalar ödenecek kira miktarından daha düşüktür. Özellikle
          son yıllarda Toronto’da ev fiyatları hızla artmaktadır. Bunun en
          önemli nedenlerinden birisi de şehre artarak gelen göçmen sayısı, ve
          piyasadaki ev miktarının talepe yetmiyor olmasıdır.
        </p>
      </div>
      <Img fluid={data.ComponentImage.childImageSharp.fluid} />

      <h5>Adım Adım Ev Alma Süreci:</h5>
      <div>
        <h6>1. Bütçe Belirleme</h6>
        <p>
          Eğer evinizi peşin almayı düşünüyorsanız bütçenizi zaten
          biliyorsunuzdur.
        </p>

        <p>
          Fakat eğer banka kredisi ile almak istiyorsanız, ilk yapmanız gereken
          bir mortgage uzmanı ile görüşmek olmalıdır. Mortgage uzmanınız
          gelirinize, kredi notunuza, diğer borçlarınıza bakarak size ne
          kadarlık bir kredi verilebileceğini onaylar. Alabileceğiniz kredi
          miktarı ve peşinatınıza göre de bütçenizi belirler.
        </p>
      </div>

      <div>
        <h6>2. Ev Arayışı</h6>
        <p>
          Bütçenizi belirledikten sonra ev arayışınıza başlayabiliriz. Öncelikle
          bütçeniz dahilinde son aylar içerisinde satılmış evlerin listesini
          inceleyerek beklentilerinizi şekillendiririz. Daha sonrasındaysa
          kriterlerinize ve bütçenize uygun evleri incelemeye başlarız.
        </p>
      </div>

      <div>
        <h6>3. Teklif Verme</h6>
        <p>
          Satın almak istediğiniz evi bulduktan sonra sıra geliyor teklif verme
          kısmına. Ne yazık ki Toronto’da birçok evin satışında birden fazla
          kişi tarafından teklif geliyor. Dolayısıyla evlerin birçoğu liste
          fiyatının üzerine satılabiliyor. Teklifinizin hazırlanması emlak
          danışmanınız tarafından eklemek istediğiniz şartlar, teslimat tarihi
          gibi detaylar göz önünde bulundurularak yapılır. Teklifiniz evi satan
          kişinin emlak danışmanına satıcı ile birlikte değerlendirilmek üzere
          sizin emlak danışmanınız tarafından gönderilir. Bu aşamadan sonra
          olası 3 senaryo vardır; teklifinizin kabul olması, bazı şartlar
          değiştirilerek sizin değerlendirmeniz için geri gönderilmesi ya da
          reddedilmesi. Reddedilirse, bunun size hiç bir dezavantajı olmaz,
          gönül rahatlığıyla ev bakma sürecinize devam edebilirsiniz!
        </p>

        <p>
          Eğer teklifiniz kabul edilirse de, bir sonraki aşama satış fiyatının
          %5’inin evi satan kişinin çalıştığı emlak ofisinin güvenli hesabında
          tutulmak üzere depozito olarak ödenmesidir.
        </p>
      </div>

      <div>
        <h6>4. Teslimat</h6>
        <p>
          Teslimat günü evin tapusunun satıcı üzerinden size geçeceği gündür.
          Teklif sırasında teslimat tarihi iki tarafın anlaşacağı üzere
          belirlenebilir. Standart olarak 30/60/90 gün şeklinde değişiklik
          göstermektedir. Teklifinizin kabul olması ile teslimat arasındaki
          süreçte, emlak avukatınızla görüşüp hazırlanacak belgelerin üzerinden
          geçersiniz. Teslimat için yapılacak para transferi tamamen avukatlar
          üzerinden gerçekleşir. Teslimattan birkaç gün önce avukatınız sizinle
          bir görüşme talep eder ve peşinatın depozitodan arta kalan kısmının
          ödemesini alır, kredi alıyorsanız krediyi bankadan alır ve teslimantin
          onaylanması ile satıcının avukatına transferini gerçekleştirir.
        </p>
      </div>

      <div>
        <h6>5. Ev Alımında Göz Önünde Bulundurulması Gereken Masraflar:</h6>
        <Ul>
          <li>
            Depozito: evin satış fiyatının %5’i olup teklif kabUlünden 24 saat
            içerisinde ödenir
          </li>
          <li>
            Peşinatın depozitodan kalan kısmı: Teslimattan hemen önce ödenir
          </li>
          <li>
            Avukat ödemesi: değişiklik gösteren bir miktar olup genellikle
            $1,500 – $2,000 arasındadır
          </li>
          <li>
            Mortgage broker komisyonu: Çalıştığınız mortgage uzmanına göre
            değişiklik gösterir
          </li>
          <li>
            Land transfer tax: Evin satış fiyatına göre değişiklik gösterip
            alıcı tarafından ödenen bir vergidir. Fiyata göre hesaplama
            yapabilmek için buraya tıklayın.
          </li>
        </Ul>
      </div>

      <a href="https://gracezeren.com/mortgage-calculator" target="_blank" rel="noopener noreferrer">
        <Button text="Mortgage Hesap Makinasi" />
      </a>
    </Layout>
  )
}

export default SatinAlmaIslemleri
