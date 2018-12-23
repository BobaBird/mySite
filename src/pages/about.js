import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'

const Wrapper = styled('div')`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #323944;

  a {
    text-decoration: none;
    color: orange;
    margin-top: 1.45rem;
  }

  @media (min-width: 800px) {
    // height: 100vh;
  }
`

const About = () => (
  <Wrapper>
    <Layout>
      <h1>About</h1>
      <p>Welcome to the About page</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </Wrapper> 
)

export default About
