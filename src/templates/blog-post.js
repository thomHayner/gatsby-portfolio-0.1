import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import Layout from '../components/layout';

export default function BlogArticle(props) {
  return (
    <StaticQuery 
      query={graphql`
        query blogPostQuery($id: Int) {
          strapiArticle(id: {eq: "$id"}) {
            author
            body
            title
            strapiId
            publishedDate
            updated_at(fromNow: true)
          }
        }      
      `}
      
      render={data=> (
        <Layout>
          <Container data={props.data}>
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
