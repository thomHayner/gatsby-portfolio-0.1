import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Col, Row } from 'react-bootstrap';
import ServicesCard from '../components/ServicesCard';

export default function ServicesPamphlet() {
  return (
    <StaticQuery
      query={graphql`
        query skillCardDeck { 
          allStrapiSkill { 
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
            {data.allStrapiSkill.nodes.map(node => (
              <Col key={node.id} >
                <ServicesCard data={node} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    />
  )
}
