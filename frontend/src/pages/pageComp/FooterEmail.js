import React, { useState } from "react"
import Button from "../../components/UI/Button"
import styled from "styled-components"
import axios from "axios"

const Container = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.gutter};
  width: 100%;
`
const Form = styled.form`
  display: grid;
  grid-gap: calc(${props => props.theme.gutter} / 2);
  grid-template-columns: 3fr 1fr;
`

const FooterEmail = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleInput = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios
        .post(
          "http://localhost:3000/api/email",
          {
            email: email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res, error) => {
          console.log(error)
          setMessage(res.data)
          setStatus(res.status)

          if (res.status === 200) {
            setEmail("")
          }
        })
    } catch (err) {
      setMessage(err.response.data.errors[0].msg)
    }
  }

  return (
    <Container>
      <small>
        Toronto Emlak Marketi İle İlgili Güncellemelerden Haberdar Olmak İçin
        Email Listemize Katılın
      </small>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email Adresiniz"
          value={email}
          onChange={handleInput}
        />
        <Button text="Katıl" />
        <Message status={status}>{message}</Message>
      </Form>
    </Container>
  )
}

const Message = styled.p`
  color: ${props => (props.status === 200 ? "#c2c2c2" : "red")};
`

export default FooterEmail
