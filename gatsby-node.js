const path = require("path")

/**
 * Genera una página por cada archivo Markdown ubicado en content/posts.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query BlogPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const template = path.resolve("./src/templates/post.js")

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/entradas/${node.frontmatter.slug}/`,
      component: template,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
