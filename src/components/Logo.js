import React from 'react'
import styled from 'styled-components'

import theme from '../../config/theme'
import logo from './logo.svg'

const LogoDiv = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 1em;
    height: 23vh;
    margin:auto;
    z-index:1;
    margin-top: 30vh;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${logo});
  }
`

class Logo extends React.Component {
  render() {
    return <LogoDiv />
  }
}

export default Logo
