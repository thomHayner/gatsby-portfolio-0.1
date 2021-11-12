import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link, StaticQuery, graphql } from 'gatsby';
import Layout from "../../components/layout";
import BlogCard from "../../templates/blogCard";

export default function BlogPage() {
  return (
    <StaticQuery
      query={graphql`
        query blogListQuery {
          allStrapiArticle(limit: 10, sort: {fields: id, order: DESC}) {
            nodes {
              id
              abstract
              author
              body
              publishedDate
              title
              updated_at
            }
          }
        }
      `} 

      render={data => (
        <Layout>
          <Container>
            <Row><h1>Latest Posts</h1></Row>
            <Row><hr/></Row>
            <Row><br/></Row>
            <Row>
              {data.allStrapiArticle.nodes.map((res, i) => (
              <Container>
                <Row><br/></Row>
                <Row>
                  <Link to={`/blog/${res.title.split(' ').join('-')}`} key={i}>
                    <BlogCard data={res}/>
                  </Link>
                </Row>
                <Row><br/></Row>
                <Row><hr/></Row>
              </Container>
              ))}
            </Row>
          </Container>
        </Layout>
      )}
    />
  )
}
