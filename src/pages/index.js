import React from 'react'
import Link from 'gatsby-link'
import PublishLine from '../components/PublishLine'
import './index.css'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={"posts/" + node.slug} className="indexLink">{node.title}</Link>
      <PublishLine author={node.author.firstName} published={node.published} category={node.category.realname} />
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
          author {
            firstName
          }
          category {
            realname
          }
          published
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
