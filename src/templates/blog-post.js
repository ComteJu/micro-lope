import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styled from 'styled-components'


import { rhythm, scale } from '../utils/typography'

const Next = styled(Link)`
  font-family: 'Montserrat, sans-serif';
  margin-top: 0;
  padding: ${rhythm(0.2)};
  text-decoration: none;
  color: #616161;
  border: 2px solid #EEEEEE;
  :hover {
      border: 2px solid #616161;
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>        
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        {/*<h1>{post.frontmatter.title}</h1>*/}
        <p
          style={{
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
            textAlign: 'right',
          }}
        >
          {post.frontmatter.episode}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: '0',
            marginBottom: '6em',
            marginLeft: '0'
          }}
        >
          {previous && (
            <li>
              <Next to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.episode}
              </Next>
            </li>
          )}

          {next && (
            <li>
              <Next to={next.fields.slug} rel="next">
                {next.frontmatter.episode} →
              </Next>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        episode
      }
    }
  }
`
