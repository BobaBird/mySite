import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'
import Image from '../components/image'
import img from '../images/homeBG.jpg'


const Wrapper = styled('div')`
  height: 122vh;
  width: 100%;
  overflow: hidden;
  background-color: #323944;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  // filter: brightness(50%);
  
  a {
    text-decoration: none;
    color: orange;
    margin-top: 1.45rem;
  }

  @media (min-width: 800px) {

  }
`

const ImageFilter = styled('div')`
  // position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
`

const IndexPage = () => (
  <Wrapper>
    <ImageFilter>
        <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image style={{ zIndex: '-10' }}/>
        </div> */}
        <Link to="/about/">Go to About page</Link>
      </Layout>
    </ImageFilter>
  </Wrapper>  
)

export default IndexPage
