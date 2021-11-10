import React from "react";
import { Container } from "react-bootstrap";
import { Link, StaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";

export default function BlogPage() {
  return (
    <StaticQuery
      query={graphql`
        query blogListQuery {
          allStrapiArticle(limit: 10) {
            nodes {
              author
              title
              thumbnailCard {
                abstract
                title
                id
              }
            }
          }
        }
      `} 
      render={data => (
        <Layout>
          <Container>
            {data.allStrapiArticle.nodes.map(res => (
              <Link to={`/blog/${res.title.split(' ').join('-')}`}>
                <h4>{res.author}</h4>
                <h5>{res.title}</h5>
                <h5>{console.log("CONSOLE LOGGEING" + res.thumbnailCard.title)}{res.thumbnailCard.title}</h5>
                <p>{res.thumbnailCard.abstract}</p>
              </Link>
            ))}
          </Container>
        </Layout>
      )}
    />
  )
}
