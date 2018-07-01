import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import TitleCover from '../components/TitleCover.js'
import Title from '../components/Title.js'
import mail from './mail.svg'
import youtube from './youtube.svg'
import logoMain from './LogoMain.svg'

import logo from './Logo.svg'
import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = <TitleCover slug="/" logo={logoMain} />
    } else {
      header = <Title slug="/" logo={logo} />
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

        <a href="mailto:microlope.prod@gmail.com"><img style={{
          position: 'fixed',
          top: '2em',
          right: '2em',
          width: '2em'
        }}src={mail} /></a>
        <a href="https://www.youtube.com/channel/UCr1c_PXXr7X10AlGp0Mazgw" target="_blank"><img style={{
          position: 'fixed',
          top: '2.1em',
          right: '5em',
          width: '2em'
        }}src={youtube} /></a>

        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '42em',
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
