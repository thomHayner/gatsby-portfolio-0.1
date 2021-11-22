import React from "react";
import { Card } from "react-bootstrap";

export default function ProjectCard({ project }) {
  return(
    <Card className="text-white align-items-center justify-content-center bg-secondary" style={{ width: "900px", height: "720px", minHeight: "640px" }} >
      <Card.Title>
        {project.name}
      </Card.Title>
      <a href={project.linkUrl} >
        <Card.Img src={project.media.url} style={{  height: "480px" }} />
      </a>
      <Card.Body>
        {project.description}
      </Card.Body>
    </Card>
  )
}
