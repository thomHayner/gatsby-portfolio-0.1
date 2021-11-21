import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

export default function BlogArticleTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark; 
  return (
    <Layout>
      <Seo title={frontmatter.slug} />
      <Container className="" style={{ maxWidth: "" }} >
        <Row>
          <img 
            alt={frontmatter.heroAlt} 
            src={frontmatter.heroSrc} 
          />
          <br/>
        </Row>
        <Row><br/></Row>
        <Row>
          <Col className="col-2" />
          <Col className="col-8" >
            <Row className="" ><h1>{frontmatter.title}</h1></Row>
            <Row className="" ><h6>{`Posted: ${frontmatter.date}`}</h6></Row>
            <Row><h6>{`by: ${frontmatter.author}`}</h6></Row>
            {/* <Row><h6>{frontmatter.updated_at}</h6></Row> */}
            <Row><br/></Row>
            <Row><hr/></Row>
            <Row><br/></Row>
            <Container className="" dangerouslySetInnerHTML={{ __html: html }} />
          </Col>
          <Col className="col-2" />
        </Row>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query oneBlogArticle($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
        author
        heroSrc
        heroAlt
      }
    }
  }
`