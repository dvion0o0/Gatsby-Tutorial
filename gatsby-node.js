const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      products: allContentfulProducts {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.products.nodes.forEach((item) => {
    createPage({
      path: `/products/${item.slug}`,
      component: path.resolve(`src/template/product-template.js`),
      context: {
        slug: item.slug,
      },
    })
  })
}
