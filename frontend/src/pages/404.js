import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout pageTitle='Sayfa Bulunamadi'>
    <h1>Sanırım Yanlış Sayfadasınız</h1>
    <Link to='/'>Anasayfaya Dön</Link>
  </Layout>
)

export default NotFoundPage
