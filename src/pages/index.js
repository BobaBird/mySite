import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'
import Image from '../components/image'


const Wrapper = styled('div')`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #323944;
`

const IndexPage = () => (
  <Wrapper>
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image style={{ zIndex: '-10' }}/>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </Wrapper>  
)

export default IndexPage
