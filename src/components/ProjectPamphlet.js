import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Col, Row } from 'react-bootstrap';
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
              <CardCarousel data={data} /> 
            </Col>
            <Col className="d-flex justify-content-center" >
              <CardCarousel data={data} /> 
            </Col>
          </Row>
        </Container>
      )}
    />
  )
}
