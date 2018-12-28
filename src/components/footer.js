import React from 'react'
import styled from 'react-emotion'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
// FiFacebook -- to add Facebook SVG image


const SectionContainer = styled('div')`
position: absolute;
width: 100%;
margin-top: 120px;
padding-top: 80px;
background-color: rgba(20, 20, 20, 1);
// background: #323944;
color: #6a6a6a !important;
min-height: 290px;
margin-bottom: 0;
padding-bottom: 0;
text-align: center;
justify-content: space-evenly;
ul {
    margin: 40px 0;
    padding: 0;
    align-items: center;
    li {
        display: inline-flex;
        margin: 0;
        padding: 0 10px;

        
        svg {
            height: 1.3em;
            width: 1.3em;
            font-weigth: lighter;
        }

        #twitter {
            stroke: #00aced;
            &:hover {
                stroke-width: 0;
                color: orange;
                fill: #00aced !important;
            }
        }
        #facebook {
            stroke: #3b5998;
            &:hover {
                stroke-width: 0;
                color: orange;
                fill: #3b5998 !important;
            }
        }
        #linkedin {
            fill: #6a6a6a;
            &:hover {
                stroke-width: 0;
                color: orange;
                fill: #0077B5 !important;
            }
        }
        #mail {
            fill: #6a6a6a;
            &:hover {
                stroke-width: 0;
                color: orange;
                fill: orange !important;
            }
        } 
    }
}

@media (min-width: 820px) {
    bottom: 0;
}
`
const Titles = styled('h1')`
    color: #6a6a6a !important;
    font-size: 2rem !important;
    font-weight: 300 !important;
    text-align: center !important;
`



const Footer = () => (
//   <div
//     style={{
//         // position: 'sticky',
//         paddingTop: '120px',
//         minHeight: '390px',
//         color: '#6a6a6a',
//         backgroundColor: 'rgba(20, 20, 20, 1)',
//         marginBottom: '0px',
//         paddingBottom: '0',
//         width: '100%'
//     }}
//   >
    <SectionContainer>
            <Titles style={{textShadow: 'none'}}>Social Media</Titles>
            <ul>
                <li>
                    <a href="https://twitter.com/oso_grizz" target="_blank" rel="noopener noreferrer"><FiTwitter id="twitter" /></a> 
                </li>
                {/* <li>
                    <a href="" label="facebook" tooltiptext="Coming soon."><FiFacebook id="facebook" /></a> 
                </li> */}
                <li>
                    <a href="/contact/"><FaEnvelope id="mail" /></a> 
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/leohtorres/" target="_blank" rel="noopener noreferrer"><FaLinkedin id="linkedin" /></a> 
                </li>
            </ul>
    </SectionContainer>
//   </div>
)

export default Footer
