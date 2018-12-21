import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Toggle from '../Utilities/toggle'

const MobileNavWrapper = styled('div')`
    max-width: 585px;
    
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        padding-right: 20px;
    }
    a {
        margin-right: 10%;
        font-size: 1.2rem;
    }
    
    @media (min-width: 820px) {
        a {
            font-size: 1.4rem
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
