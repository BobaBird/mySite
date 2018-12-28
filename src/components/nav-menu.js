import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Toggle from '../Utilities/toggle'

const MobileNavWrapper = styled('div')`
    max-width: 600px;
    margin-left: 0;
    padding-bottom: 0;
    :parent {
        text-align: center;
    }
    
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        padding-right: 100px;
        
    }
    a {
        text-decoration: none;
        // font-weight: 200;
        margin-right: 10%;
        font-size: 1rem;
        // color: #1f2023;
        color: #FF7C00 ;
        // color: orange;
        &:hover {
            transition: all 230ms ease;
            border-bottom: 2px solid cornflowerblue;
        }
    }

    @media (min-width: 565px ) {
        margin-left: 18%;
    }

    @media (max-width: 657px) {
        // margin-left: 18%;
    }
    
    @media (min-width: 658px) {
        margin-left: 22%;

    }
    
    @media (min-width: 820px) {
        ul {
            padding-right: 80px;
        }
        a {
            font-size: 1.6rem;
            margin-right: 10%;
        }
    }
`

const activeLinkSTyle = {
    borderBottom: '2px solid cornflowerblue',

}

export default class NavMenu extends Component {
  render() {
    const { toggle } = this.props
    return (
        <>
            <Toggle>
                {({ toggle }) => (
                    <MobileNavWrapper>
                        <ul>
                            <Link to="/" activeStyle={activeLinkSTyle} onClick={toggle} >
                                <li>Home</li>
                            </Link>

                            <Link to="/about/" activeStyle={activeLinkSTyle} onClick={toggle} >
                                <li>About</li>
                            </Link>

                            <Link to="/contact/" activeStyle={activeLinkSTyle} onClick={toggle} >
                                <li>Contact</li>
                            </Link>

                            <Link to="/portfolio/" activeStyle={activeLinkSTyle} onClick={toggle} >
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
