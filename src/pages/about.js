import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'

const Wrapper = styled('div')`
  // height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background: #323944;
  // text-shadow: 4px 4px 8px #4d4d4d, -4px -4px 8px #4d4d4d;

  h1 {
    // padding-top: 40px;
    font-weight: 300;
    font-size: 3.45rem;
    @media (min-width: 820px) {
      font-size: 6rem;
    }
  }
  
  h2 {
    font-weight: 300;
    font-size: 3.45rem;
  }
  
  p {
    font-size: 2rem;
  }

  a {
    text-decoration: none;
    margin-top: 1.45rem;
  }
  
  #pageLink {
    font-size: 1.2rem;
    color: orange;
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
      <p>
        <Link to="/" id="pageLink">Go back to the homepage</Link>
      </p>
    </Layout>
  </Wrapper> 
)

export default About
