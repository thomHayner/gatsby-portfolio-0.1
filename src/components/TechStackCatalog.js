import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';

export default function TechStackCatalog() {
  return (
    <StaticQuery
      query={graphql`
        query techStackBadges {
          allStrapiTechnology {
            nodes {
              name
              description
              img {
                localFile {
                  url
                }
              }
            }
          }
        }
      `} 

      render={data => (
        <Container>
          <Row>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              {data.allStrapiTechnology.nodes.map((node, i) => (
                <Tab eventKey={node.name} title={ <img alt="" src={node.img.localFile.url} width="60" height="60" /> }>
                  {node.description}
                </Tab>
              ))}
            </Tabs>
          </Row>
        </Container>
      )}
    />
  )
}
