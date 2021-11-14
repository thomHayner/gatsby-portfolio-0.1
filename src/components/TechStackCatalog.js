import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

// Make it collapse into even rows of icons
// Maybe add a text description, one or two paragraphs, or maybe have it cycle through highlighting different stacks

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
        <Container className="m-3" >
          <Row>
            <Col className="d-flex justify-content-center m-3" >
              <h1>Skills</h1>
            </Col>
          </Row>
          <Row><br/></Row>
          <Row>
            <Col className="d-flex justify-content-center m-3" >
              <Tab.Container>
                <Nav variant="pills" className="flex-row">
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
