import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import Button from "../components/UI/Button"

import Layout from "../components/layout"

const EmailList = props => {
  const [email, setEmail] = useState("")
  const [data, setData] = useState([])
  const [login, setLogin] = useState(false)

  const handleInput = e => {
    setEmail(e.target.value)
  }
console.log(process.env.GATSBY_PASSWORD);

  const handleSubmit = async e => {
    e.preventDefault()
    if (email === process.env.GATSBY_PASSWORD) {
      setLogin(true)
    }
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `${process.env.GATSBY_BACKEND}/api/get-email`
        )
        setData(res.data)
      } catch (err) {
        console.log(err.response.data.errors[0].msg)
      }
    }
    fetch()
  }, [])


  if(!login) {
    return (   <Layout pageTitle="email">
    <Form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Email"
        value={email}
        onChange={handleInput}
      />
      <Button text="Ac" />

    </Form>
  </Layout>)
  }

  return(
    <Layout pageTitle="email">
      <ul>
        
        {data && data.map(item => <li key={item._id}>{item.email}</li>)}
      </ul>
    </Layout>
 
  )}

  const Form = styled.form`
  display: grid;
  grid-gap: calc(${props => props.theme.gutter} / 2);
  grid-template-columns: 3fr 1fr;
`

export default EmailList
