import React from "react";
import { Card } from "react-bootstrap";

export default function ServicesCard({ data }) {
  return(
    <Card className="bg-tertiary m-3 p-4" style={{ minHeight: "180px", minWidth: "325px" }} >
      <Card.Title className="text-warning--" >
        {data.title}
      </Card.Title>
      <Card.Body className="p-0" >
        {data.text}
      </Card.Body>
    </Card>
  )
}
