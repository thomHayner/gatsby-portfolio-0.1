import React from "react";
import { Container } from "react-bootstrap";
import { StaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";

export default function BlogPage() {
  return (
    <StaticQuery
      query={graphql`
        query SiteQuery {
          allStrapiArticle {
            nodes {
              author
              title
            }
          }
        }
      `} 
      render={data => (
        <Layout>
          <Container>
            {data.allStrapiArticle.nodes.map((res, i) => (
              <div>
                <h4>{res.author}</h4>
                <h5>{res.title}</h5>
              </div>
            ))}
          </Container>
        </Layout>
      )}
    />
  )
}
