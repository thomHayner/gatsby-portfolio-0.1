import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link, StaticQuery, graphql } from 'gatsby';
import Layout from "../../components/layout";

export default function BlogPage() {
  return (
    <StaticQuery
      query={graphql`
        query blogListQuery {
          allStrapiArticle(limit: 10, sort: {fields: id, order: DESC}) {
            nodes {
              abstract
              author
              publishedDate
              title
            }
          }
        }
      `} 

      render={data => (
        <Layout>
          <Container>
            <Row><br/></Row>
            <Row><br/></Row>
            <Row><hr/></Row>
            <Row><h1>Latest Posts</h1></Row>
            <Row><hr/></Row>
            <Row><br/></Row>
            <Row>
              {data.allStrapiArticle.nodes.map((res, i) => (
              <Container>
                <Row>
                  <Link to={`/blog/${res.title.split(' ').join('-')}`} key={i}>
                    <h4>{res.title}</h4>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <h5>{res.author}</h5>
                      <h5>. . . . . . . . . . .</h5>
                      <h5>{res.publishedDate}</h5>
                    </div>
                    <p>{res.abstract}</p>
                  </Link>
                </Row>
                <Row><hr/></Row>
              </Container>
              ))}
            </Row>
            <Row><br/></Row>
            <Row><br/></Row>
            <Row><br/></Row>
          </Container>
        </Layout>
      )}
    />
  )
}
