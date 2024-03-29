import React from "react";
import { Card } from "react-bootstrap";

export default function ProjectCard({ project }) {
  return(
    <Card className="text-white align-items-center justify-content-center bg-dark-navy" style={{ width: "900px", height: "720px", minHeight: "640px" }} >
      <Card.Title>
        {project.name}
      </Card.Title>
      <Card.Img src={project.media.url} style={{  height: "480px", width: "600px" }} />
      <a href={project.linkUrl} >
        Try it out!
      </a>
      <Card.Body>
        {project.description}
      </Card.Body>
    </Card>
  )
}
