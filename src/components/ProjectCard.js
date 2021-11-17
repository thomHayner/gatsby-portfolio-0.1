import React from "react";
import { Card } from "react-bootstrap";

export default function ProjectCard({ data }) {
  return(
    <Card className="text-white align-items-center justify-content-center bg-secondary" style={{ width: "400px", minWidth: "355px", height: "512px" }} >
      <Card.Title>
        {data.name}
      </Card.Title>
      {/* <Card.Img src={data.img.localFile.url} style={{ width: "200px", height: "200px" }} /> */}
      <Card.Body>
        {data.description}
      </Card.Body>
    </Card>
  )
}
