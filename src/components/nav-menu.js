import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Toggle from '../Utilities/toggle'

const MobileNavWrapper = styled('div')`
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
                    <MobileNavWrapper>
                        <ul>
                            <Link to="/" onClick={toggle} >
                                <li>Home</li>
                            </Link>

                            <Link to="/about/" onClick={toggle} >
                                <li>About</li>
                            </Link>

                            <Link to="/contact/" onClick={toggle} >
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </MobileNavWrapper> 
                )}
            </Toggle>
        </>  
    )
  }
}
