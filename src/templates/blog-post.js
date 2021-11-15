import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row } from 'react-bootstrap';
import Layout from '../components/layout';

export default function BlogArticle() {
  return (
    <div>
    {/* <StaticQuery 
      query={graphql`
        query blogPost {
          strapiArticle {
            id
            title
            author
            publishedDate
            body
            heroImage {
              localFile {
                url
              }
            }
          }
        }
      `}
      
      render={data=> (
        <Layout>
          <Container>
            <Row><img src={data.strapiArticle.heroImage.localFile.url} alt="" /></Row>
            <Row><br/></Row>
            <Row><hr/></Row>
            <Row><h1>{data.strapiArticle.title}</h1></Row>
            <Row>{data.strapiArticle.author}</Row>
            <Row>{data.strapiArticle.publishedDate}</Row>
            <Row>{data.strapiArticle.updated_at}</Row>
            <Row>{data.strapiArticle.body}</Row>
          </Container>
        </Layout>
      )}
    /> */}
    </div>
  )
}
