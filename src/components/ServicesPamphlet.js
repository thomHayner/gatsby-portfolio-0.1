import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import ServicesCard from '../components/ServicesCard';

export default function ServicesPamphlet() {
  return (
    <StaticQuery
      query={graphql`
        query skillCardDeck { 
          allStrapiSkill(sort: {fields: displayOrder, order: ASC}) { 
            nodes { 
              id 
              name 
              description 
            } 
          } 
        } 
      `} 

      render={data => (
        <Container className="m-3" >
          <Row>
            <Col className="d-flex justify-content-center" >
              <h1>Skills and Services</h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mb-3" >
              <h5>What can we do for you?</h5>
            </Col>
          </Row>
          <Row>
            <CardGroup as="Col" className="d-flex justify-content-center" >
              {data.allStrapiSkill.nodes.map(node => (
                <Col key={node.id} >
                  <ServicesCard data={node} />
                </Col>
              ))}
            </CardGroup>
          </Row>
        </Container>
      )}
    />
  )
}
