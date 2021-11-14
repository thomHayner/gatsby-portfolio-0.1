import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Col, Row, Nav, Tab } from 'react-bootstrap';
import CardCarousel from './Carousel';

export default function ProjectPamphlet() {
  return (
    <StaticQuery 
      query={graphql` 
        query projectCardDeck { 
          allStrapiSkill(sort: {fields: displayOrder, order: ASC}) { 
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
              <h1>Projects</h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mb-3" >
              <h5>Things that have worked before...</h5>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center" >
              <Tab.Container>
                <Nav variant="pills" className="flex-row">
                  {data.allStrapiSkill.nodes.map((node, i) => (
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
          <Row>
            <Col className="d-flex justify-content-center" >
              <CardCarousel data={data} /> 
            </Col>
          </Row>
        </Container>
      )}
    />
  )
}
