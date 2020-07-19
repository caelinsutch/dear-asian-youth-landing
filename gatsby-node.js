exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const chapterTemplate = require.resolve(`./src/templates/chapterTemplate.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: chapterTemplate,
      context: {
        // additional data can be passed via context
        title: node.frontmatter.title,
        slug: node.frontmatter.slug,
      },
    })
  })
}
