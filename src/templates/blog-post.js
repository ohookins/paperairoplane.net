import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PublishLine from '../components/PublishLine'
import TagCluster from '../components/TagCluster'

class BlogPost extends Component {
    render() {
        const {
            title,
            body,
            author,
            published,
            category,
            tags,
        } = this.props.data.contentfulPost;
        return (
            <div>
                <h1>{title}</h1>
                <PublishLine author={author.firstName} published={published} category={category.realname} />
                <TagCluster tags={tags} />
                <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}} />
            </div>
        )
    }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
            title
            slug
            author {
                firstName
            }
            published
            category {
                realname
            }
            tags {
                realname
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`
