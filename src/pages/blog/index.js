import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link, StaticQuery, graphql } from 'gatsby';
import Layout from "../../components/layout";
import BlogCard from "../../components/BlogCard";

export default function BlogPage() {
  return (
    <Layout>
      <StaticQuery
        query={graphql`
          query allBlogArticles {
            allMarkdownRemark {
              nodes {
                frontmatter {
                  slug
                  title
                  author
                  date
                }
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
                {data.allMarkdownRemark.nodes.map((node, i) => (
                <Container>
                  <Row><br/></Row>
                  <Row>
                    <Link to={`/blog/${node.frontmatter.slug}`} key={i}>
                      <BlogCard data={node.frontmatter}/>
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
    </Layout>
  )
}
