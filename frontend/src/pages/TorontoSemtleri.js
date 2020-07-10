import React from "react"

import styled from "styled-components"
import Media from "../theme/Media"

import Layout from "../components/layout"
import Video from "../components/UI/Video"

const Semt = styled.div`
  display: grid;
  grid-gap: calc(${props => props.theme.gutter} * 2);

  @media ${Media.laptop} {
    grid-auto-flow: column;

    &.reversed {
      .video {
        grid-column: 1;
      }
    }
  }
`

const TorontoSemtleri = () => {
  return (
    <Layout className="pageLayout" pageTitle="Toronto Semtleri">
      <h3>Toronto Semtleri</h3>
      <Semt>
        <div>
          <h6>East York</h6>
          <p>
            East York Toronto’da müstakil bir evde yaşamak isteyip ilk evini
            satın almak isteyen birçok kişinin ilk tercih ettiği semtlerden
            biridir. Gerek şehir merkezine yakınlığı gerekse hala bir milyon
            doların altına ev bulabilme olasılığı East York’u oldukça cazip
            kılmaktadır. Semtte yaşayanlar ya buranın eskileri ya da yeni
            taşınan çocuklu ailelerdir. Aynı zamanda Yunan mahallesi olarak da
            bilinen bu semt Yunan restaurant, café ve pastanelerinin çokluğuyla
            Türkler tarafından da oldukça tercih edilen bir semttir.
          </p>
          <p>
            Bölge hakkında daha fazla bilgi için YouTube kanalımdaki videoma göz
            atabilirsiniz.
          </p>
        </div>
        <Video
          className="video"
          src="https://www.youtube.com/embed/GerKXRqRkW8?feature=oembed"
        />
      </Semt>
      <hr />
      <Semt className="reversed">
        <div>
          <h6>Beaches</h6>
          <p>
            Beaches Toronto’nun göl kenarında, tam bir sahil kasabası hissi
            veren aynı zamanda da şehir merkezine sadece 20 dakika kadar
            mesafede olan en gözde semtlerinden biridir. Özellikle yazları gerek
            spor gerekse müzik ile ilgili birçok etkinliğin ve festivalin
            olduğu, aktif bir yaşam tarzı sürmek isteyen kişiler için ideal
            bölgedir. Ev fiyatları Toronto ortalamasının oldukça üstünde olup
            daha çok Victoria tarzı geniş evlere rastlamak mümkündür.
          </p>
          <p>
            Bölge hakkında daha fazla bilgi için YouTube kanalımdaki videoma göz
            atabilirsiniz.
          </p>
        </div>
        <Video
          className="video"
          src="https://www.youtube.com/embed/cTongYPpR6g?feature=oembed"
        />
      </Semt>
      <hr />
      <Semt>
        <div>
          <h6>Leslieville</h6>
          <p>
            East York’un güneyinde kalan daha çok Toronto’nun genç profesyonel
            kesiminin yaşadığı bölgedir. Müstakil evler arazi bakımından çok
            daha küçük olsa da Queen street’e yakınlığı ve semtin popüleritesi
            nedeniyle oldukça rağbet alan bir bölgedir. Müstakil evlerin yanı
            sıra oldukça tercih edilen modern rezidans ve loft tarzı evler
            bulmak da mümkündür.
          </p>
          <p>
            Bölge hakkında daha fazla bilgi için YouTube kanalımdaki videoma göz
            atabilirsiniz.
          </p>
        </div>
        <Video
          className="video"
          src="https://www.youtube.com/embed/OLHLxtA1n8A?feature=oembed"
        />
      </Semt>
      <hr />
      <Semt className="reversed">
        <div>
          <h6>Yonge And Eglinton</h6>
          <p>
            Toronto’nun özellikle yabancı yatırımcılar ve yeni gelenler
            tarafından en çok tercih edilen semtlerinden biridir. Gerek
            güvenlik, gerek iyi okullar gerekse şehir merkezine gitmeye gerek
            kalmadan her şeyi bulabilme açısından Yonge and Eglinton Toronto’nun
            en popüler semtleri arasında her zaman ilk sıralarda yer alıyor.
            Müstakil evler en az 1.5 milyon dolardan başlasa da yeni yapılan
            yüksek katlı binalar sayesinde her bütçeye uygun bir rezidans
            dairesi bulmak mümkündür. Özellikle yatırımcılar için, kiralık
            evlerin boşta kalmama garantisinin olduğu bölgelerden biridir.
          </p>
          <p>
            Bölge hakkında daha fazla bilgi için YouTube kanalımdaki videoma göz
            atabilirsiniz.
          </p>
        </div>
        <Video
          className="video"
          src="https://www.youtube.com/embed/aKx74ZlesQ0?feature=oembed"
        />
      </Semt>
      <hr />
      <Semt>
        <div>
          <h6>Rosedale</h6>
          <p>
            Rosedale Toronto şehir merkezine oldukça yakın, fakat büyük
            ağaçlarla kaplı sokakları geniş parklaarı ve tarihi görünümlü
            malikane tarzı evleriyle sizi şehrin dışında hissetirebilecek bir
            semttir. Burası Toronto’nun hatta Kanada’nın en yüksek gelirli
            kişilerinin çoğunlukla yaşadığı bir bölge olup birçok kişi
            tarafından en çok hayranlık duyulan semtlerden biridir. Ortalama bir
            müstakil evin fiyatı 3 milyon dolardan başlıyor olsa da finansal
            açıdan problemi olmayan bir kişinin Rosedale de yapacağı bir yatırm
            kendinden sonraki nesillerine kadar kar sağlayacak en iyi
            yatırımlardan biri olacaktır.
          </p>
          <p>
            Bölge hakkında daha fazla bilgi için YouTube kanalımdaki videoma göz
            atabilirsiniz.
          </p>
        </div>
        <Video
          className="video"
          src="https://www.youtube.com/embed/zpJko_0Ppxo?start=3&feature=oembed"
        />
      </Semt>
    </Layout>
  )
}

export default TorontoSemtleri
