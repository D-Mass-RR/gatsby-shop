import type { GatsbyNode } from "gatsby";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import * as path from "path";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query AllProducts {
      data {
        allProducts {
          id
          title
          image
          desc
          price
          inStock
          availability
        }
      }
    }
  `);

  const productTemplate = path.resolve(`src/templates/Product.tsx`);
  queryResults.data.data.allProducts.forEach((node) => {
    createPage({
      path: `/product/${node.id}`,
      component: productTemplate,
      context: {
        product: node,
      },
    });
  });
};
