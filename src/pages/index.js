import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug} className="indexLink">{node.title}</Link>
      <div dangerouslySetInnerHTML={{__html: node.body.childMarkdownRemark.excerpt }} className="indexSummary"/>
    </li>
  )
}

const IndexPage = ({data}) => (
  <ul className="indexList">
    {data.allContentfulPost.edges.map((edge) => <BlogPost node={edge.node} />)}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPost (filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 400)
            }
          }
        }
      }
    }
  }
`
