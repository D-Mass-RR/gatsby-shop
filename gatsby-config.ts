import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `simple gatsby shop app`,
    author: `@D-Mass-RR`,
  },
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `data`,
        fieldName: `data`,
        url: `http://localhost:3000/graphql`,
      },
    },
  ],
  jsxRuntime: `automatic`,
};

export default config;
