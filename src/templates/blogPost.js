import React from 'react';
import Layout from '../components/layout';
import { StaticQuery, graphql } from 'gatsby';

export default function BlogArticle() {
  return (
    // <div />
    <StaticQuery 
      query={graphql`
        query blogPostQuery {
          strapiArticle {
            author
            body
            title
            publishedDate
            updated_at(fromNow: true)
          }
        }
      `}
      
      render={
        <Layout>
        
        </Layout>
      }
    />
  )
}
