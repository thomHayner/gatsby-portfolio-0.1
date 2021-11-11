import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row } from 'react-bootstrap';
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
            <Row><br/></Row>
            <Row><br/></Row>
            <Row><hr/></Row>
            <Row><h1>{data.strapiArticle.title}</h1></Row>
            <Row><hr/></Row>
            <Row><br/></Row>
            <Row>{data.strapiArticle.author}</Row>
            <Row>{data.strapiArticle.publishedDate}</Row>
            <Row>{data.strapiArticle.updated_at}</Row>
            <Row>{data.strapiArticle.body}</Row>
            <Row><br/></Row>
            <Row><br/></Row>
            <Row><br/></Row>
          </Container>
        </Layout>
      )}
    />
  )
}
