import React from "react";
import { Card } from "react-bootstrap";

export default function ProjectCard({ data }) {
  return(
    <Card className="text-white align-items-center justify-content-center bg-secondary" style={{ width: "400px", minWidth: "355px", height: "512px" }} >
      <Card.Title>
        {data.name}
      </Card.Title>
      <a href="http://battleship.thomashayner.com" >
        <Card.Img src="" style={{ width: "200px", height: "200px" }} />
      </a>
      <Card.Body>
        {data.description}
      </Card.Body>
    </Card>
  )
}
