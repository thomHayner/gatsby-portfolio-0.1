module.exports = {
  siteMetadata: {
    title: `Thomas Hayner - Software Engineer`,
    description: `Thomas Hayner's Software Engineering Portfolio`,
    author: `Thomas Hayner`,
    keywords: `
      Thomas Hayner,
      Project Portfolio,
      Software Development,
      Web Development,
      Mobile Development,
      Web Application,
      Mobile Application,
      Web App,
      Mobile App,
      SaaS,
    `,
    image: `/icon.png`,
    siteUrl: `http://ThomasHayner.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thomas Hayner`,
        short_name: `ThomasHayner`,
        description: `Thomas Hayner's Software Engineering Portfolio.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#0a192f`,
        display: `standalone`,
        // Generate PWA icons and a favicon
        icon: `src/assets/images/icon.png`,
        // crossOrigin: `anonymous`,
        // localize: [
        //   {
        //     start_url: `/es/`,
        //     lang: `es`,
        //     name: `Tomás Hayner`,
        //     short_name: `TomásHayner`,
        //     description: `Portafolio de ingeniería de software de Tomás Hayner.`,
        //   },
        //   {
        //     start_url: `/de/`,
        //     lang: `de`,
        //     name: `Thomas Hayner`,
        //     short_name: `ThomasHayner`,
        //     description: `Das Software Engineering-Portfolio von Thomas Hayner.`,
        //   },
        //   {
        //     start_url: `/fr/`,
        //     lang: `fr`,
        //     name: `Thomas Hayner`,
        //     short_name: `Thomas Hayner`,
        //     description: `Portefeuille de génie logiciel de Thomas Hayner.`,
        //   },
        //   {
        //     start_url: `/it/`,
        //     lang: `it`,
        //     name: `Tomaso Hayner`,
        //     short_name: `TomasoHayner`,
        //     description: `Portfolio di ingegneria del software di Tomaso Hayner.`,
        //   },
        //   {
        //     start_url: `/pt/`,
        //     lang: `pt`,
        //     name: `Tomás Hayner`,
        //     short_name: `TomásHayner`,
        //     description: `Portfólio de Engenharia de Software de Tomás Hayner.`,
        //   },
        // ],
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
          include: /assets\/icons/
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
