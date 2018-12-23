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
        padding-right: 50px;
        
    }
    a {
        margin-right: 10%;
        font-size: 1rem;
        // color: #1f2023;
        color: #FF7C00 !important;
    }
    
    @media (min-width: 820px) {
        ul {
            padding-right: 100px;
        }
        a {
            font-size: 1.8rem;
            margin-right: 10%;
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

                            <Link to="/portfolio/" onClick={toggle} >
                                <li>Portfolio</li>
                            </Link>
                        </ul>
                    </MobileNavWrapper> 
                )}
            </Toggle>
        </>  
    )
  }
}
