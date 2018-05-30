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
                                body {
                                    body
                                }
                            }
                        }
                    }
                }
            `).then((result) => {
                console.log(result);
                if (result.errors) {
                    reject(result.errors);
                }

                result.data.allContentfulPost.edges.forEach((edge) => {
                    createPage ({
                        path: edge.node.slug,
                        component: blogPostTemplate,
                        context: {
                            slug: edge.node.slug,
                            title: edge.node.title,
                            bodyText: edge.node.body,
                        }
                    })
                });

                return;
            })
        );
    });
}
