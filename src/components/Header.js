import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from './logo.png'
import mail from './mail.svg'
import youtube from './youtube.svg'
import { rhythm, scale } from '../utils/typography'

const Wrap = styled.div`
    position: fixed;
    left: 0em; right: 0em; bottom: 0em;
    width: calc(100vw-2em);
    z-index: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 4vw;
    padding-top: ${rhythm(0.5)};
    background-color: #FCC318;
`

const Title = styled.h1`
  font-family: 'Montserrat, sans-serif';
  font-size: 24px;
  margin-top: 0;
  padding: ${rhythm(0.5)};
  background-color: #A1C71E;
  border: 3px solid #FCDB76;
  :hover {
      border: 3px solid white;
      a {opacity: 0.8}
  }
`

const TitleLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: white;
`

class Header extends React.Component {
  render() {
    return (
    <Wrap>
      {/*<img
          src={logo}
          alt={`Logo Microlope`}
          style={{
            marginBottom: '1vw',
            width: rhythm(2),
            height: rhythm(2),
            marginRight: '4vw',
          }}
        />*/}
      <Title>
        <TitleLink to={'/'}>Micro Lopé</TitleLink>
      </Title>
      <img
          src={mail}
          alt={`Contact Microlope`}
          style={{
            marginBottom: '1vw', marginLeft: '4vw',
            width: rhythm(1),
            height: rhythm(2),
            fill: 'white',
          }}
        />
      </Wrap>
    )
  }
}

export default Header
