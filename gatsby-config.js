module.exports = {
  siteMetadata: {
    title: `Thomas Hayner`,
    description: `Thomas Hayner's Software Engineering Portfolio`,
    author: `Thomas Hayner`,
    keywords: `
      Software Development,
      Web Development,
      Mobile Development,
      Web Application,
      Mobile Application,
      App,
      Web App,
      Mobile App,
      SaaS,
      Node,
      JavaScript,
      CSS,
      HTML,
      TypeScript,
      React,
      NextJS,
      Gatsby,
    `,
    // image: `/src/assets/images/icon.png`,
    siteUrl: `http://ThomasHayner.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thomas Hayner`,
        short_name: `HRG Interactive`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#0a192f`,
        display: `minimal-ui`,
        // Generate PWA icons and a favicon
        icon: `src/assets/images/icon.png`,
      }
    },
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
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
    },
  ],
};
