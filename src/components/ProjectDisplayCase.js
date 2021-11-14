import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Col, Row } from 'react-bootstrap';
import CardCarousel from './Carousel';

export default function ProjectDisplayCase() {
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
            <Col className="d-flex justify-content-center m-3" >
              <h1>Projects</h1>
            </Col>
          </Row>
          <Row><br/></Row>
          <Row>
            <Col className="m-3" >
              <CardCarousel data={data} /> 
            </Col>
            <Col className="m-3" >
              <CardCarousel data={data} /> 
            </Col>
          </Row>
        </Container>
      )}
    />
  )
}
