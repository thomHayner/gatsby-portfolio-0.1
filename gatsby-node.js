const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query blogPostQuery {
      allStrapiArticle {
        nodes {
          title
        }
      }
    }
  `)

  data.allStrapiArticle.nodes.forEach(node => {
    actions.createPage({
      path: '/blog/' + node.title.split(' ').join('-'),
      component: path.resolve('./src/templates/blogPost.js'),
      context: { slug: node.title.split(' ').join('-') },
    })
  })

}