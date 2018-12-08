import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Toggle from '../Utilities/toggle'

const NavWrapper = styled('div')`
text-align: center;
ul {
    list-style: none;
    
    a {
        // color: #fff;
    }
}
`

export default class NavMenu extends Component {
  render() {
    const { toggle } = this.props
    return (
        <>
            <Toggle>
                {({ toggle }) => (
                    <NavWrapper>
                        <ul>
                            <Link to="/">
                                <li>Home</li>
                            </Link>

                            <Link to="/about/">
                                <li>About</li>
                            </Link>

                            <Link to="/contact/">
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </NavWrapper> 
                )}
            </Toggle>
        </>  
    )
  }
}
