const path = require('path');

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators;

    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve('src/templates/blog-post.js');

        resolve(
            graphql(`
                {
                    allContentfulPost (limit: 1000) {
                        edges {
                            node {
                                id
                                slug
                                title
                                published
                                category {
                                    realname
                                }
                                tags {
                                    realname
                                }
                                author {
                                    firstName
                                }
                                body {
                                    body
                                }
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors);
                }

                result.data.allContentfulPost.edges.forEach((edge) => {
                    createPage ({
                        path: "posts/" + edge.node.slug,
                        component: blogPostTemplate,
                        context: {
                            slug: edge.node.slug,
                            title: edge.node.title,
                            author: edge.node.author.firstName,
                            published: edge.node.published,
                            category: edge.node.category.realname,
                            tags: edge.node.tags,
                            body: edge.node.body,
                        }
                    })
                });

                return;
            })
        );
    });
}
