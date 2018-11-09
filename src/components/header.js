import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Image from '../components/image'

const LogoContainer = styled('div')`
  margin: 0;
  width: 120px;
  height: 120px;
  position: relative;
  // display: flex;
`

const Header = ({ siteTitle }) => (
  <div
    style={{
      margin: '0',
      padding: '0',
      background: 'black',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1480,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, display: 'flex' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <LogoContainer>
            <Image />
          </LogoContainer>
          {/* {siteTitle} */}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
