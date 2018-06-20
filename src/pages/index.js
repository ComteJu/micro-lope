import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import styled from 'styled-components'
import logo from './logo.png'


const Grid = styled.div`
  display: Grid;
  grid-gap: ${rhythm(1.5)};
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
  padding-top: 10vh; padding-bottom: 10vh;
`

const Box = styled.article`
  padding: ${rhythm(0.2)};
  max-width: 70vw;
  margin: auto;
`
const Card = styled.figure`
  position: relative;
`
const Legend = styled.figcaption`
position: absolute;
padding: 0.5em;
left: 0em; top: 0em;
  background-color: white;
  p {
    font-size: 16px;
  }
`

const TopLegend = styled.figcaption`
position: absolute; 
padding: 0.2em;
top: -1.2em; left: 0em;
  background-color: white;
  p {
    color: #9C9C9A; margin: 0;
  }
`

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <img
          src={logo}
          alt={`Logo Microlope`}
          style={{
            display: 'block',
            margin: 'auto',
            width: rhythm(8),
          }}
        />
        <Grid>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <Link style={{ boxShadow: 'none'}} to={node.fields.slug}>
              <Box key={node.fields.slug}>
              <Card>
                <img
                  src={
                    node.frontmatter.image.childImageSharp.responsiveSizes.src
                  }
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    margin: '0',
                  }}
                />
                <Legend>
                <p style={{margin:'0', padding: '0', color: '#9C9C9A' }}>                  
                    {title}                  
                </p>
                </Legend>
                <TopLegend>
                <p>{node.frontmatter.episode}</p>
                </TopLegend>
                </Card>
              </Box>
              </Link>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            episode
            image {
              childImageSharp {
                responsiveSizes(maxWidth: 700) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
