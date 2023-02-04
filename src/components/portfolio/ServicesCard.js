import React from "react";
import { Card } from "react-bootstrap";

export default function ServicesCard({ data }) {
  return(
    <Card className="p-3 h-100 bg-primary border border-tertiary">
      <Card.Title className="text-light" >
        {data.title}
      </Card.Title>
      <Card.Body className="p-0 text-muted" >
        {data.text}
      </Card.Body>
    </Card>
  )
}
