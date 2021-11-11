import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container, Card } from "react-bootstrap";

export default function ServicesCard() {
  return(
    <div/>
    // <StaticQuery
    //   query={graphql`
    //     query portfolioCards {
    //       allStrapiSkills {
    //         nodes {
    //           name
    //           description
    //         }
    //       }
    //     }
    //   `}

    //   render={data=> (
    //     <Container>
    //       <Card>

    //       </Card>
    //     </Container>
    //   )}
    // />
  )
}