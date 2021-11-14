import React from "react";
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
