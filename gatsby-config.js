module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-portfolio-0.0.1",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`article`],
        singleTypes: [],
        // loginData: {
        //   identifier: 'reader@strapi.io',
        //   password: 'strapi',
        // },
      },
    },
  ],
};
