import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'

const Wrapper = styled('div')`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #323944;

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

  #pageLink {
      font-size: 1.2rem;
    //   color: orange;
    color: #4d4d4d;
      
      &:hover {
        color: #898989;
        // border-bottom: 2px solid;
        text-decoration: underline;
      }
  }

  a {
    text-decoration: none;
    margin-top: 1.45rem;
  }

  @media (min-width: 800px) {
    // height: 100vh;
  }
`

const Portfolio = () => (
  <Wrapper>
    <Layout>
      <h1>Portfolio</h1>
      <p>Welcome to the Portfolio page</p>
      <Link to="/" id="pageLink">Go back to the homepage</Link>
    </Layout>
  </Wrapper> 
)

export default Portfolio
