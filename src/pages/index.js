import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import styled from 'styled-components'

const Grid = styled.div`
  display: Grid;
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
  grid-auto-rows: minmax(14em, auto);
  grid-gap: 1em;
`

const Box = styled.article`
  max-width: 100%;
`
const Card = styled.figure`
  height: 100%;
  margin-bottom: 0;
`

import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <div
          style={{
            textAlign: 'center',
            backgroundColor: 'white',
          }}
        ><h3
          style={{
            paddingTop:'3em',
            margin:'1em',
            color: 'hsl(191, 81%, 41%)',
          }}
        >Bienvenue dans la Saison 1</h3>
        <h1
          style={{
            margin:'0',
            paddingBottom:'3em',
            marginBottom: '1em',
            
          }}
        >C'est un joli nom...</h1></div>
        <Grid>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            const color = get(node, 'frontmatter.color')
            /*const image = get(
              node,
              'frontmatter.image.childImageSharp.responsiveSizes.src'
            )*/
            return (
              <Box
                key={node.fields.slug}
              >
                <Card
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: color,
                  }}
                >
                  <h2
                    style={{
                      margin: '0',
                    }}
                  >
                    {node.frontmatter.episode}
                  </h2>
                  <h1
                    style={{
                      margin: '0',
                     
                    }}
                  >
                    <Link
                      style={{
                        height: '100%',
                      }}
                      to={node.fields.slug}
                    >
                      {title}
                    </Link>
                  </h1>
                </Card>
              </Box>
              
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
            color
          }
        }
      }
    }
  }
`
