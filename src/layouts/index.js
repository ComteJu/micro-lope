import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import FullBg from '../components/FullBackground'
import Header from '../components/Header'
import Logo from '../components/Logo'
import logo2 from './logo2.svg'
import logoMain from './LogoMain.svg'

import title from './title.svg'
import logo from './logo.svg'
import bgPic from './bg-pic.png'
import { rhythm, scale } from '../utils/typography'

const HeaderDiv = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url(${logo});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <div
            style={{
              padding: '2em 0',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              backgroundImage: 'url('+bgPic+')',
              backgroundSize: 'cover',
              backgroundAttachment:'fixed',
              backgroundPosition: 'center',
              borderBottom: '1em solid white',
              height: '100vh',
            }}
          >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
            opacity: '0.8',
          }}
          to={'/'}
        >
          <img
            style={{
              height: rhythm(5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
            src={logoMain}
          />
        </Link>
        </div>
      )
    } else {
      header = (
        <div
            style={{
              padding: '2em 0',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
            opacity: '0.5',
          }}
          to={'/'}
        >
          <img
            style={{
              height: rhythm(3),
              marginTop: 0,
              marginBottom: rhythm(-1),
            }}
            src={logo}
          />
        </Link>
        </div>
      )
    }
    return (
      <div
        style={{
          width: '100vw',
          maxWidth: '100%',
          minHeight: '100vh',
          backgroundColor: '#EEEEEE',
        }}
      >
      
            {header}
          
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(32),
            padding: `${rhythm(1.5)} 0`,
          }}
        >
          


          <div
            style={{
              margin: '0 1em',
            }}
          >
            {children()}
          </div>
        </div>
      </div>
    )
  }
}

export default Template
