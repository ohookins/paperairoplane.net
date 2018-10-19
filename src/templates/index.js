import React from "react";
import Link from "gatsby-link";
import PublishLine from "../components/PublishLine";
import "./index.css";

const BlogPost = ({ node }) => {
  return (
    <li>
      <Link
        to={"/posts/" + node.slug}
        className="indexLink b cabin f4 f4-m f3-ns"
      >
        {node.title}
      </Link>
      <PublishLine
        author={node.author.firstName}
        published={node.published}
        category={node.category.realname}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: node.body.childMarkdownRemark.excerpt
        }}
        className="indexSummary"
      />
    </li>
  );
};

class IndexPage extends React.Component {
  render() {
    const { nextPath, prevPath, pageID } = this.props.pathContext;
    const posts = this.props.data.allContentfulPost.edges;

    return (
      <div>
        <ul className="list pl0">
          {posts.map(edge => (
            <BlogPost key={edge.node.slug} node={edge.node} />
          ))}
        </ul>

        <div className="flex justify-center cabin b ma4">
          <div className="ph2">
            {prevPath && (
              <Link to={prevPath}>
                <svg
                  className="w1"
                  data-icon={"chevronLeft"}
                  viewBox={"0 0 32 32"}
                  style={{ fill: `currentcolor` }}
                >
                  <title>chevronLeft icon</title>
                  <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z" />
                </svg>
                <span className="ph2 f5 f4-ns f4-m v-btm">Previous</span>
              </Link>
            )}
          </div>

          <div className="ph2 f5 f4-ns f4-m pageNumber">{pageID}</div>

          <div className="ph2">
            {nextPath && (
              <Link to={nextPath}>
                <span className="ph2 f5 f4-ns f4-m v-btm">Next</span>
                <svg
                  className="w1"
                  data-icon={"chevronRight"}
                  viewBox={"0 0 32 32"}
                  style={{ fill: `currentcolor` }}
                >
                  <title>chevronRight icon</title>
                  <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query pageQuery($skip: Int!, $limit: Int!) {
    allContentfulPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [published], order: DESC }
      skip: $skip
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
`;
