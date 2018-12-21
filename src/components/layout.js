import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'

import Header from './header'
import './styles.css'

const PageWrapper = styled('div')`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: auto 18%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  `
  
  const PageContainer = styled('div')`
  width: 100%;
  // height: 100%;
  padding: 12px 0px 24px;
  margin: 2px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  color: #c2c6ce;
`


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <PageWrapper>
          <PageContainer >
            {children}
          </PageContainer>
        </PageWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
