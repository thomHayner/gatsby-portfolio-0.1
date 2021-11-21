module.exports = {
  siteMetadata: {
    siteUrl: "http://ThomasHayner.com",
    title: "Thomas Hayner",
    description: "this is a test of react helmet",
    author: "Thomas Hayner",
    keywords: "test, react helmet test, test, test",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["src/index.scss"],
        }
      },
    },  
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/images\/techStackIcons/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        name: `markdown-pages`,
        path: `${__dirname}/src/assets/markdown-pages`,
      },
      
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
    },
  ],
};
