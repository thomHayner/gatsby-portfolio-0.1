import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

// Make it collapse into even rows of icons
// Maybe add a text description, one or two paragraphs, or maybe have it cycle through highlighting different stacks

export default function TechStackPamphlet() {
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
            <Col className="d-flex justify-content-center" >
              <h1>Technologies</h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mb-3" >
              <h5>How would you like it done?</h5>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center" >
              <Tab.Container>
                <Nav variant="pills" className="flex-row">
                  {data.allStrapiTechnology.nodes.map((node, i) => (
                    <Nav.Item>
                      <Nav.Link eventKey={node.name}>
                        <img alt="" src={node.img.localFile.url} width="60rem" height="60rem" />
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
