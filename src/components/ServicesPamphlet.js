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
              <h1>Knowledge</h1>
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
