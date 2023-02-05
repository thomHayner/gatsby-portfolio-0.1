import React from 'react';
import '../../index.scss';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link, StaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';
// import BlogCard from '../../components/blog/BlogCard';

export default function BlogPage() {
  return (
    <Layout>
      <Container>
        <Row><h1>Latest Posts</h1></Row>
        <Row><hr/></Row>
        <Row><span className='fs-6'>Nothing To Display</span></Row>
      </Container>
      {/* <StaticQuery
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
              <Row>
                <Col className='col-1' ></Col>
                <Col className='col-7' >
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
                </Col>
                <Col className='col-4' >
                  <p>THIS IS JUST SOME PLACEHOLDER TEXT AND SUCH FOR THIS col-4 REGION</p>
                </Col>
              </Row>
            </Container>
          </Layout>
        )}
      /> */}
    </Layout>
  )
};

export const Head = () => (
  <Seo title='Blog' />
);
