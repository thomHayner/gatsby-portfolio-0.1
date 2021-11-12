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
        <Container> 
          <Row>
            <Col>
              <CardCarousel data={data} /> 
            </Col>
            <Col>
              <CardCarousel data={data} /> 
            </Col>
          </Row>
        </Container>
      )}
    />
  )
}
