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
          {data.allStrapiSkill.nodes.map(node => (
            <Card>
              <Card.Title>
                {node.name}
              </Card.Title>
              {/* <Card.Img/> */}
              <Card.Body>
                {node.description}
              </Card.Body>
            </Card>
          ))}
        </Container>
      )}
    />
  )
}