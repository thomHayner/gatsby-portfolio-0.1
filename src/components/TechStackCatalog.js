import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';

export default function TechStackCatalog() {
  return (
    <StaticQuery
      query={graphql`
        query techStackBadges {
          allStrapiTechnology(sort: {fields: displayOrder, order: ASC}, limit: 8) {
            nodes {
              id
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
          
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab" className="mb-3" variant="pills" >
              {data.allStrapiTechnology.nodes.map((node, i) => (
                <Tab key={node.id} eventKey={node.name} title={ <img alt="" src={node.img.localFile.url} width="60" height="60" /> }>
                  {node.description}
                </Tab>
              ))}
            </Tabs>
          
        </Container>
      )}
    />
  )
}
