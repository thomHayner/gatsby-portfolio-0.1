import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types";
import {helmet } from 'react-helmet';

const Helmet = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }`
  )
}