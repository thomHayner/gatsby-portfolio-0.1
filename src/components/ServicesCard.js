import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container, Card } from "react-bootstrap";

export default function ServicesCard() {
  return(
    <StaticQuery
      query={graphql`
        query skillsCards {
          allStrapiSkills {
            nodes {
              name
              description
            }
          }
        }
      `}

      render={data=> (
        <Container>
          <Card>
            
          </Card>
        </Container>
      )}
    />
  )
}