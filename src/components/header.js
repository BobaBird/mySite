import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Image from '../components/image'
import { FaBars } from 'react-icons/fa'

import NavMenu from './nav-menu'

const HeaderWrapper = styled('div')`
  display: flex;
  // justify-content: space-around;
  justify-content: center;
  width: 100%;
  padding-bottom: 40px;
  text-align: center;
  // max-width: 1450px;
  position: relative;
  max-height: 80px;
  // background: #fff8ea;
  background-color: none;;
  margin-bottom: 1.45rem;
  
  @media (min-width: 820px) {
    margin: 0;
    padding: 0;
    margin-bottom: 0;
  }
`

const HeaderContainer = styled('div')`
  // display: flex;
  // flex-direction: row;
  max-width: 1250px;
  justify-content: space-between;
  align-items: center;
  
  width: 90%;
  
  @media (min-width: 820px) {
    display: flex;
    
  }
  
  `
  
  const LogoContainer = styled('div')`
  margin: 0 auto;
  padding: 8px;
  align-items: center;
  width: 115px;
  
  @media (min-width: 820px) {
    margin: 0;
    float: left;
    width: 120px;
    padding-top: 80px;
    
  }
`


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
      <HeaderContainer>
          <LogoContainer>
              <Link to="/">
                    <Image />
                    {/* {siteTitle} */}
              </Link>
          </LogoContainer>


          <NavMenu />


      </HeaderContainer>

  </HeaderWrapper>
)

export default Header
