import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import bgPic from './bg-pic.png'


const Wrap = styled.div`
  height: 100vh;
  padding: 2rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: url(${bgPic});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  border-bottom: 1rem solid hsla(191, 70%, 37%, 0.68);
`

const TitleCover = ({ slug, logo}) => (
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
          height: '20vw',
          marginBottom: '1.5rem',
          marginTop: 0,
        }}
        src={logo}
      />
    </Link>
  </Wrap>
)

export default TitleCover
