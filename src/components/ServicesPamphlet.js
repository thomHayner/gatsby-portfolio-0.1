import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import ServicesCard from '../components/ServicesCard';

export default function ServicesPamphlet() {
  return (
    <StaticQuery
      query={graphql`
        query skillCardDeck { 
          allStrapiSkill { 
            nodes {
              id 
            } 
          }
        }
      `}

      render={data => (
        <Container>
          {data.allStrapiSkill.nodes.map(node => (
            <ServicesCard id={node.id} />
          ))}
        </Container>
      )}
    />
  )
}
