module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ThomasHayner.com",
    title: "Thomas Hayner",
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
      resolve: `gatsby-source-filesystem`,
      options: 
      {
        name: `markdown-pages`,
        path: `${__dirname}/src/assets/markdown-pages`,
      },
      
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/images\/techStackIcons/
        }
      }
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Defaults to 100
    //     collectionTypes: [`article`, 'skill', `category`],
    //     singleTypes: ['services-pamphlet', 'tech-stack-pamphlet'],
    //     // loginData: {
    //     //   identifier: `reader@strapi.io`,
    //     //   password: `strapi`,
    //     // },
    //   },
    // },
  ],
};
