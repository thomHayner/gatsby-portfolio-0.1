const path = require('path');

// exports.createPages = async ({ graphql, actions }) => {
//   const { data } = await graphql(`
//     query blogPostQuery {
//       allStrapiArticle {
//         nodes {
//           title
//         }
//       }
//     }
//   `)

//   data.allStrapiArticle.nodes.forEach(node => {
//     const slug = node.slug
//     actions.createPage({
//       path: '/blog/' + slug,
//       component: path.resolve('./src/templates/blog-post.js'),
//       context: { slug: slug },
//     })
//   })

// }