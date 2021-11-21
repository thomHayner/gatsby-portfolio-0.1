/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

/**
 * pulled from: 
 * https://github.com/gatsbyjs/gatsby-starter-default/blob/master/src/components/seo.js
 * while using tutorial from: 
 * https://www.digitalocean.com/community/tutorials/how-to-boost-seo-using-gatsby-s-seo-component-and-gatsby-react-helmet
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 function Seo({ description, lang, meta, title }) {
   const { site } = useStaticQuery(
     graphql`
        query helmetQuery {
          site {
            siteMetadata {
              description
              siteUrl
              title
              keywords
            }
          }
        }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const defaultTitle = site.siteMetadata?.title
   const keywords = site.siteMetadata.keywords
 
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           name: 'keywords',
           content: keywords,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         {
           name: `twitter:card`,
           content: `summary`,
         },
         {
           name: `twitter:creator`,
           content: site.siteMetadata?.author || ``,
         },
         {
           name: `twitter:title`,
           content: title,
         },
         {
           name: `twitter:description`,
           content: metaDescription,
         },
       ].concat(meta)}
     />
   )
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
 }
 
 export default Seo
 