import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container, Card } from "react-bootstrap";

export default function ServicesCard() {
  return(
    <StaticQuery
      query={graphql`
      query skillCard {
        strapiSkill {
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