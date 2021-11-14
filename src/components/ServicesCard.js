import React from "react";
// import { StaticQuery, graphql } from "gatsby";
import { Container, Card } from "react-bootstrap";

export default function ServicesCard({ data }) {
  return(
    <Card className="border-dark m-3 p-5" style={{ minWidth: "310px", height: "250px", backgroundColor: "#363636" }} >
      <Container className="" style={{ width: "290px" }}>
      <Card.Title className="text-warning" >{data.name}</Card.Title>
      <Card.Body className="p-0" >{data.description}</Card.Body>
      </Container>
    </Card>
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