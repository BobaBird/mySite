import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'
import Image from '../components/image'
import img from '../images/homeBG.jpg'


const Wrapper = styled('div')`
  // position: absolute;
  // height: 122.82vh;
  width: 100%;
  overflow: hidden;
  // background-color: #323944;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  text-shadow: 4px 4px 8px #4d4d4d, -4px -4px 8px #4d4d4d;
  
  h1 {
    // padding-top: 100px;
    font-weight: 300;
    font-size: 3.45rem;
    color: #fff;
    
    @media (min-width: 820px) {
      font-size: 6rem;
    }
  }
  
  h2 {
    color: #fff;
    font-weight: 300;
    font-size: 3.45rem;
  }
  
  p {
    font-size: 2rem;
    color: #fff; 
  }
  
  a {
    text-decoration: none;
    // color: orange;
    margin-top: 1.45rem;
  }
  
  @media (min-width: 800px) {
    
  }
  `


const ImageFilter = styled('div')`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  min-height: 100%;
`

const IndexPage = () => (
  <Wrapper>
    <ImageFilter>
          <Layout>
        <h1>Leo Torres | Web Developer</h1>
        <h2>Websites, Blogs, E-commerce</h2>
        <p>Custom sites for what you need.</p>
      </Layout>
    </ImageFilter>
  </Wrapper>  
)

export default IndexPage
