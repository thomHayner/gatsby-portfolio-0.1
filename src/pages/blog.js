import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/layout";
import { StaticQuery, graphql } from 'gatsby';

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

/*
//

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

  render{data => (
    <Layout>
      <Container>
        {data.allStrapiArticle.nodes.map((res, i) => (
          <h4>{res.author}</h4>
        ))}
      </Container>
    </Layout>
  )}
/>

//
//
//

<Layout>
      <Container>
        <div id="PostsTemplate" />
  </Container>
</Layout>

//

*/