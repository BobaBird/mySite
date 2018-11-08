import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'

const Wrapper = styled('div')`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #323944;
`

const SecondPage = () => (
  <Wrapper>
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </Wrapper> 
)

export default SecondPage
