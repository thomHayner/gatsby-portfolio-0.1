module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ThomasHayner.com",
    title: "Thomas Hayner",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`article`, `category`],
        singleTypes: [],
        // loginData: {
        //   identifier: `reader@strapi.io`,
        //   password: `strapi`,
        // },
      },
    },
  ],
};
