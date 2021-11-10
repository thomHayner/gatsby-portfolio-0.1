import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import Layout from '../components/layout';

export default function BlogArticle() {
  return (
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
      
      render={data=> (
        <Layout>
          <Container>
            <h3>{data.strapiArticle.title}</h3>
            <h5>{data.strapiArticle.author}</h5>
            <h5>{data.strapiArticle.publishedDate}</h5>
            <h5>{data.strapiArticle.updated_at}</h5>
            <p>{data.strapiArticle.body}</p>
          </Container>
        </Layout>
      )}
    />
  )
}
