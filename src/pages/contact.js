import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'

const Wrapper = styled('div')`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #323944;

  a {
    text-decoration: none;
    color: orange;
  }

  @media (min-width: 800px) {
    height: 100vh;
  }
`

const Contact = () => (
  <Wrapper>
    <Layout>
      <h1>Contact</h1>
      <p>Welcome to the Contact page</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </Wrapper> 
)

export default Contact
