<p align="center">
  <a href="http://www.ThomasHayner.com">
    <img alt="TH" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Portfolio Site w/ Markdown Blog
</h1>

## Intro

<p>A brochure website highlighting my project portfolio and web development skills, with a web development blog as well.
</p>
<p>
Originally this was a full stack project hooked up to a Headless CMS called [Strapi](http://www.strapi.io).  After setting up a minimum viable product in development mode I deployed to AWS for a few days, but later decided that it would be better to scrap the backend / API in favor of a hosted site with static profile content and programattically generated blog posts from markdown files, and (possibly, I am still considering this part) a CMS like [Contently](http://www.contently.com) for image hosting.
</p>
<p>
This simpler setup allows the portfolio and blog site to be very low cost, free hosting through [Gatsby Cloud](http://www.GatsbyCloud.com) means that I only have to pay for the annual domain name registration (for which I used [GoDaddy](http://www.GoDaddy.com)).  I can also just push to GitHub for both new content, new site features or improvements.  The automated CI / CD environment allows for easy deployments and intermittent content updates, and can be easily replaced with a scalable backend solution if the need arises and the expense becomes justifiable.
</p>

## Tech Stack

<details><summary>Core Dependencies</summary>
<p>

- JavaScript
- NodeJS
- React
- BootStrap
- Gatsby
- Sass
- GraphQL

</p>
</details>

<details><summary>Plugins / Utilities</summary>
<p>

- gatsby-source-filesystem
- gatsby-transformer-remark
- gatsby-plugin-react-svg
- gatsby-plugin-gatsby-cloud
- gatsby-plugin-sass

</p>
</details>

<details><summary>Future Development Plans</summary>
<p>

- React Helmet
- Apollo

</p>
</details>

<details><summary>Gatsby Resources</summary>
<p>

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

</p>
</details>