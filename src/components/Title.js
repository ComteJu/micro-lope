import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import bgPic from './bg-pic.png'


const Wrap = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const Title = ({slug, logo}) => (
  <Wrap>
    <Link
      style={{
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit',
        opacity: '0.8',
      }}
      to={slug}
    >
      <img
        style={{
          height: '3rem',
          marginBottom: '-1.5rem',
          marginTop: 0,
        }}
        src={logo}
      />
    </Link>
  </Wrap>
)

export default Title
