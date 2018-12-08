import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Image from '../components/image'
import { FaBars } from 'react-icons/fa'

import NavMenu from './nav-menu'

const HeaderWrapper = styled('div')`
  display: grid;
  position: relative;
  margin: 0;
  padding: 0;
  max-height: 80px;
  // background: rgba(20, 20, 20, 1);
  background: #fff8ea;
  margin-bottom: 1.45rem;

  @media (min-width: 800px) {
    // margin-bottom: 0;
  }
`

const LogoContainer = styled('div')`
  positiion: relative;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  max-width: 45%;
  padding-bottom: 1.45rem;

  @media  (min-width: 800px) {
    margin: 0;
    max-width: 6%;
  }
`

const MobileWrapper = styled('div')`
  // margin: 0 auto;
  background: rgbs(20, 20, 20, 1);
  padding: 1.45rem 1.0875rem;
  
  button {
    margin-left: 40%;
  }

   svg {
      width: 3rem;
      height: 3rem;
      // margin: 0;
      color: #c2c6ce;
      color: gray;
   }

   @media (min-width: 800px) {
      display: none;
   }
`

const NavList = styled('div')`
   grid-template-columns: 1fr 1fr 1fr;

   ul {
     li {
       list-style-type: none;
     }
   }

   a {
     text-decoration: none;
     list-display: none;
   }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
      <LogoContainer>
    <Link to="/">
          {/* <Image /> */}
          {/* {siteTitle} */}
    </Link>
      </LogoContainer>


      <MobileWrapper>
        <button>
          <FaBars />
        </button>
      </MobileWrapper>

      <NavMenu />

  </HeaderWrapper>
)

export default Header
