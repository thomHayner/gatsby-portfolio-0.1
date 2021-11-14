import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, Nav, Tab, Tabs, TabPane } from 'react-bootstrap';

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
          <Row>
            <Col className="d-flex justify-content-center" >
              <h1>Skills</h1>
            </Col>
          </Row>
          <Row><br/></Row>
          <Row>
            <Col className="d-flex justify-content-center" >
              <Tab.Container>
                <Nav variant="pills" className="flex-row mb-3">
                {data.allStrapiTechnology.nodes.map((node, i) => (
                  <Nav.Item>
                    <Nav.Link eventKey={node.name}>
                      <img alt="" src={node.img.localFile.url} width="60" height="60" />
                    </Nav.Link>
                  </Nav.Item>
                ))}
                </Nav>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      )}
    />
  )
}
