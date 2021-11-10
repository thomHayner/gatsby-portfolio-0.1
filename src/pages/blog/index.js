import React from "react";
import { Container } from "react-bootstrap";
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
            {data.allStrapiArticle.nodes.map(res => (
              <Link to={`/blog/${res.title.split(' ').join('-')}`}>
                <h4>{res.title}</h4>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h5>{res.author}</h5>
                  <h5>. . . . . . . . . . .</h5>
                  <h5>{res.publishedDate}</h5>
                </div>
                <p>{res.abstract}</p>
              </Link>
            ))}
          </Container>
        </Layout>
      )}
    />
  )
}
