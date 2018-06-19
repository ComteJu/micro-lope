import React from 'react'
import styled from 'styled-components'

import bgPic from './bg-pic.png'

const Full = styled.div`
  position: fixed; z-index: -21;
  top: 0; left: 0;
  width: 100vw; height: 50vh;
  background-image: url(${bgPic});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom;
`

const TopBox = styled.div`
position: fixed; z-index: -21;
top: 0; left: 0;
width: 100vw; height: 50vh;
`

const BotBox = styled.div`
position: fixed; z-index: -21;
bottom: 0; left: 0;
width: 100vw; height: 50vh;
background-color: #FCC318;
`

const Background = styled.img`
object-fit: cover;
width: 100vw;
height: 50vh;
`

const Mask = styled.div`
  position: fixed; opacity: 0.3; z-index: -20;
  top: 1em; left: 1em; right: 1em; bottom: 1em;
  width: calc(100vw-2em); height: calc(100vh-2em);
  background-color: white;
`

class FullBg extends React.Component {
    render() {
      return (
          <div  style={{backgroundColor:'grey'}}>
        <TopBox>
            <Background src={bgPic}/>
        </TopBox>
        <BotBox>
        </BotBox>
        <Mask>
        </Mask>
        </div>
      )
    }
  }
    
export default FullBg
