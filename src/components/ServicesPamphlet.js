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
        <Col className="d-flex justify-content-center" >
          <CardGroup>
            {data.allStrapiSkill.nodes.map(node => (
              <Col key={node.id} >
                <ServicesCard data={node} />
              </Col>
            ))}
          </CardGroup>
        </Col>
      )}
    />
  )
}
