import React, { useState } from "react"
import styled from "styled-components"
// import Media from "../theme/Media"
import Button from "../components/UI/Button"
import Layout from "../components/layout"

// const pageContainer = styled.div`
//   display: grid;
//   margin: 125px auto 5vw;
//   padding: calc(${props => props.theme.gutter} * 2);
//   background: ${props => props.theme.color.white};
//   width: 100%;
//   box-sizing: border-box;
//   z-index: 100;
//   form,
//   label {
//     display: grid;
//   }

//   @media ${Media.tablet} {
//     margin: 125px auto 5vw;
//     width: 80%;
//   }
//   @media ${Media.laptop} {
//     margin: 250px auto 5vw;
//     width: 600px;
//   }
// `

const ModalTitle = styled.div`
  display: grid;

  grid-auto-flow: column;
  justify-content: space-between;
`

const Iletisim = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submit, setSubmit] = useState(false)

  const handleChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmit(true)
    setInfo({ name: "submit", email: "", subject: "", message: "" })
  }

  return (
    <Layout>
      <ModalTitle>
        <h3>İletişim</h3>
      </ModalTitle>
      {submit ? (
        <div>
          <p>
            Mesajiniz ulaştı, teşekkür ederim. <br /> En kısa zamanda geri
            döneceğim size
          </p>
        </div>
      ) : (
        <form action="" method="post" onSubmit={handleSubmit}>
          <p>
            <label>
              İsim - Soyisim (zorunlu)
              <br />
              <input
                type="text"
                name="name"
                value={info.name}
                size="40"
                aria-required="true"
                aria-invalid="false"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              E-mail Adresiniz (zorunlu)
              <br />
              <input
                type="email"
                name="email"
                value={info.email}
                size="40"
                aria-required="true"
                aria-invalid="false"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Konu
              <br />
              <input
                type="text"
                name="subject"
                value={info.subject}
                size="40"
                aria-invalid="false"
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Mesajiniz
              <br />
              <textarea
                name="message"
                cols="40"
                value={info.message}
                rows="10"
                aria-invalid="false"
                onChange={handleChange}
              ></textarea>
            </label>
          </p>
          <p>
            <Button text="Gönder" />
          </p>
        </form>
      )}
      </Layout>
  )
}

export default Iletisim
