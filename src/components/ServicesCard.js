import React from "react";
import { Container, Card } from "react-bootstrap";

export default function ServicesCard({ data }) {
  return(
    <Card className="m-3 p-3 border-dark bg-secondary" style={{ minWidth: "325px", minHeight: "175px" /* , backgroundColor: "#363636" */ }} >
      <Container className="m-1" style={{ minHeight: "150px", minWidth: "315px" }} >
      <Card.Title className="text-warning" >{data.title}</Card.Title>
      <Card.Body className="p-0" >{data.text}</Card.Body>
      </Container>
    </Card>
  )
}
