import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row } from 'react-bootstrap';
import Layout from '../../components/layout';

export default function BlogArticleTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark; 
  return (
    <Layout>
      <Container>
        {/* <Row><img src={frontmatter.url} alt="" /></Row> */}
        <Row><br/></Row>
        <Row><hr/></Row>
        <Row><h1>{frontmatter.title}</h1></Row>
        <Row>{`On: ${frontmatter.date} By: ${frontmatter.author}`}</Row>
        <Container className="" dangerouslySetInnerHTML={{ __html: html }} />
        {/* <Row>{frontmatter.updated_at}</Row> */}
        {/* <Row>{frontmatter.body}</Row> */}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query oneBlogArticle($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`