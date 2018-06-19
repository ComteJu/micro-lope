import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from './logo.png'
import mail from './mail.svg'
import youtube from './youtube.svg'
import { rhythm, scale } from '../utils/typography'

const Wrap = styled.div`
    position: fixed;
    left: 1em; right: 1em; bottom: 0em;
    width: calc(100vw-2em);
    z-index: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${rhythm(0.5)} ${rhythm(2)};
    backdrop-filter: blur(10px);
`

const Title = styled.h1`
  font-family: 'Montserrat, sans-serif';
  margin-top: 0;
  padding: ${rhythm(0.5)};
  border: 3px solid #9C9C9A;
  :hover {
      border: 3px solid white;
      a {color: #9C9C9A;}
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
      <img
          src={logo}
          alt={`Logo Microlope`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
      <Title>
        <TitleLink to={'/'}>Micro Lopé</TitleLink>
      </Title>
      <img
          src={mail}
          alt={`Contact Microlope`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
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
