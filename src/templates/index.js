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

class IndexPage extends React.Component {
    render() {
        const {nextPath, prevPath} = this.props.pathContext
        const posts = this.props.data.allContentfulPost.edges
        
        return (
            <div>
                <ul className="indexList">
                    {posts.map((edge) => <BlogPost key={edge.node.slug} node={edge.node} />)}
                </ul>

                <div className="flex justify-center cabin b ma4">
                    <div className="previousPost pagination ph2">
                        {prevPath && <Link to={prevPath}>
                            <svg className="w1" data-icon={"chevronLeft"} viewBox={"0 0 32 32"} style={{fill:`currentcolor`}}>
                                <title>chevronLeft icon</title>
                                <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                            </svg>
                            <span className="ph2 f4 v-btm">Previous</span>
                        </Link>}
                    </div>
                    <div className="nextPost pagination ph2">
                        { nextPath && <Link to={nextPath}>
                            <span className="ph2 f4 v-btm">Next</span>
                            <svg className="w1" data-icon={"chevronRight"} viewBox={"0 0 32 32"} style={{fill:`currentcolor`}}>
                                <title>chevronRight icon</title>
                                <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
                            </svg>
                        </Link>}
                    </div>
                </div>
            </div>
        )
    }
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery($skip: Int!, $limit: Int!) {
    allContentfulPost (filter: {
      node_locale: {eq: "en-US"}
    },
    skip: $skip,
    limit: $limit
    ) {
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
