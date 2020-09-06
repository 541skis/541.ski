const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `).then((result) =>
    result.data.allShopifyProduct.edges.forEach(({ node }) =>
      createPage({
        component: path.resolve('src/components/ProductLayout/index.js'),
        context: { handle: node.handle },
        path: `/${node.handle}/`,
      })
    )
  );
};
