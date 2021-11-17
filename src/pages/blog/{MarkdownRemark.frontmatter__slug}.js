import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row } from 'react-bootstrap';
import Layout from '../../components/layout';

export default function BlogArticleTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark; 
  return (
    <Layout>
      <Container className="" style={{ maxWidth: "" }} >
        {/* <Row><img src={frontmatter.url} alt="" /></Row> */}
        <Row><br/></Row>
        <Row><p>HERO IMAGE GOES HERE</p></Row>
        <Row><br/></Row>
        <Row className="" ><h1>{frontmatter.title}</h1></Row>
        <Row className="" ><h6>{`Posted on: ${frontmatter.date}, by: ${frontmatter.author}`}</h6></Row>
        {/* <Row><h6>{frontmatter.updated_at}</h6></Row> */}
        <Row><br/></Row>
        <Row><hr/></Row>
        <Row><br/></Row>
        <Container className="" dangerouslySetInnerHTML={{ __html: html }} />
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
      }
    }
  }
`