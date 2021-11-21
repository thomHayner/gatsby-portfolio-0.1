import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types";
import { Helmet } from 'react-helmet';

export default function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
    query helmetQuery {
      site {
        siteMetadata {
          siteUrl
          title
          description
        }
      }
    }`
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return(
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
      ].concat(meta)}
    />
  )
}