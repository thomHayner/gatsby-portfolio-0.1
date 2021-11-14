import React from "react";
import { Container, Card } from "react-bootstrap";

export default function ServicesCard({ data }) {
  return(
    <Card className="m-3 p-5 border-dark bg-secondary" style={{ minWidth: "275px", minHeight: "150px" /* , backgroundColor: "#363636" */ }} >
      <Container className="" style={{ height: "150px", width: "275px" }} >
      <Card.Title className="text-warning" >{data.name}</Card.Title>
      <Card.Body className="p-0" >{data.description}</Card.Body>
      </Container>
    </Card>
  )
}
