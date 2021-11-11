import React from "react";
// import { StaticQuery, graphql } from "gatsby";
import { Container, Card } from "react-bootstrap";

export default function ServicesCard({ data }) {
  return(
    <Container>
        <Card style={{ width: "256px", height: "400px", alignItems: "center", backgroundColor: "#363636" }} >
          <br/>
          <Card.Title>{data.name}</Card.Title>
          <Card.Img src={data.img.localFile.url} style={{ width: "200px", height: "200px" }} />
          <Card.Body>{data.description}</Card.Body>
        </Card>
    </Container>
  )
}

{/* 
  export default function ServicesCard({ data }) {
    return(
      <StaticQuery
        query={graphql`
          query skillCard($id: String!) { 
            strapiSkill(id: {eq: "$id"}) {  
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
                <Card.Title>{data.strapiSkill.name}</Card.Title>
                <Card.Img src={data.strapiSkill.img.localFile.url} style={{ width: "200px", height: "200px" }} />
                <Card.Body>{data.strapiSkill.description}</Card.Body>
                {console.log("id: " + id)}
              </Card>
          </Container>
        )}
      /> 
    )
  }
*/}