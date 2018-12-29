import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import Layout from '../components/layout'

const Wrapper = styled('div')`
  // height: 100vh;
  // width: 100%;
  max-width: 960px;
  margin auto;
  background: #323944;
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center center;
  
  form {
    max-width: 960px;
  }

  h1 {

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
    color: orange;
  }

  a {
    text-decoration: none;
    margin-top: 1.45rem;
    
  }

  button {
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 45px;
    text-transform: uppercase;
    border: red;
    box-shadow: 2px 2px 4px #4d4d4d;
    outline: none;
    width: 180px;
    background: red;
    color: #fff;
    position: relative;
    overflow-x: hidden;
    
    span {
      z-index: 20;
      
    }
    &:active {
      background-color: #e01111;
      color: #fff;
      background-size: 100%;
      transition: background 0s;
    }
    
    &:after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: .2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
  }
  button:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
  
  input {
    // line-height: 30px;
    font-size: 1.4rem;
  }
  
  input,
  select,
  textarea {
    
    -webkit-text-fill-color: #4b5970;
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    color: #2276f9;
    font-weight: 500;
  }
  
  textarea {
    font-size: 1.4rem;
    border: 1px solid #4d4d4d;
    // padding: 18px;
    max-width: 960px;

    
  }
  #textArea {
    display: block;
    margin: 0 auto;
    width: 80%;
    padding: 5px 0;

  @media (min-width: 800px) {
    form {
      // max-width: 960px;
    }

    textarea {
    }
    #textArea {
      min-width: 100%;
      margin 0;
    }
  }
`

const Contact = () => (

      <Layout>
  <Wrapper>
      <h1>Contact</h1>
      <p>Want to get started; still have questions? Drop me a line.</p>

      <form action="">
        <input type="hidden" method="POST" data-netlify="true" netlify-honeypot="bot-field"/>
        <p>
          <label htmlFor="name">Full Name: </label>
          <input type="text" name="name" required/>
        </p>
        <p>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" required/>
        </p>
        <p>
          <label htmlFor="message">Message: </label>
          <textarea id="textArea" name="message" col="50" rows="8" required/>
        </p>

        <p>
          <button className="contactBtn" type="submit"><span>Send</span></button>
        </p>
      </form> 

      <p>
        <Link to="/" id="pageLink">Go back to the homepage</Link>
      </p>
      </Wrapper> 
    </Layout>
)

export default Contact
