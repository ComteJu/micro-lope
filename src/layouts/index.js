import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

import FullBg from '../components/FullBackground'
import Header from '../components/Header'

import bgPic from './bg-pic.png'
import { rhythm, scale } from '../utils/typography'



class Template extends React.Component {
  render() {
    const { location, children } = this.props
    
    
    return (
      <div>        
        <div
          style={{
            margin: 'auto',
            minHeight: '100vh',
            maxWidth: rhythm(40),
            padding: `${rhythm(1.5)} 5vw`,
          }}
        >
          <Header />
          {children()}
        </div>
        <FullBg />
      </div>
    )
  }
}

export default Template
