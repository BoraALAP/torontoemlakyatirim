import React from "react"

// import styled from 'styled-components'

import ImageAndText from "./pageComp/ImageAndText"

import Layout from "../components/layout"
import ProfileCard from "./pageComp/ProfileCard"
import Slider from "./pageComp/Carousel"

const IndexPage = props => (
  <Layout pageTitle="Anasayfa">
    <Slider />
    <ProfileCard />
    <ImageAndText />
  </Layout>
)

export default IndexPage
