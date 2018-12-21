import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Image from '../components/image'
import { FaBars } from 'react-icons/fa'

import NavMenu from './nav-menu'

const HeaderWrapper = styled('div')`
  display: flex;
  justify-content: space-around;
  width: 100%;
  // max-width: 1250px;
  position: relative;
  margin: 0;
  padding: 0;
  max-height: 80px;
  background: #fff8ea;
  margin-bottom: 1.45rem;

  @media (min-width: 820px) {
    // margin-bottom: 0;
  }
`

const HeaderContainer = styled('div')`
  display: flex;
  flex-direction: row;
  max-width: 1250px;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

const LogoContainer = styled('div')`
  margin: 0;
  padding: 8px;
  padding-top: 60px;
  align-items: center;
  width: 120px;
  
  @media (min-width: 820px) {
    float: left;
    
  }
`


const NavList = styled('div')`
  // list-style-type: none;
  // max-width: 585px;
  
  // @media (min-widht: 820px) {
  //   display: flex;
  //   flex-direction: row;
  // }

  
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
