import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container, Card } from "react-bootstrap";

export default function ServicesCard() {
  return(
    <StaticQuery
      query={graphql`
        query skillCard { 
          strapiSkill(id: {eq: "Skill_2"}) { 
            id 
            name 
            description 
            img { 
              localFile { 
                url 
              } 
            } 
            strapiId 
          } 
        }
      `}

      render={data=> (
        <Container>
            <Card style={{ width: "256px", height: "400px", alignItems: "center" }} >
              <br/>
              <Card.Title>
                {data.strapiSkill.name}
              </Card.Title>
              <Card.Img src={data.strapiSkill.img.localFile.url} style={{ width: "200px", height: "200px" }} />
              <Card.Body>
                {data.strapiSkill.description}
              </Card.Body>
            </Card>
        </Container>
      )}
    />
  )
}