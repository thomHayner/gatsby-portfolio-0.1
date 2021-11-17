import React from 'react';
import { Card } from 'react-bootstrap';

export default function BlogCard({ data }) {
  return (
    <Card className="bg-dark text-light">
      <Card.Title>{data.title}</Card.Title>
      <Row>
        <Card.Subtitle>{data.date}</Card.Subtitle>
        <Card.Subtitle>{data.author}</Card.Subtitle>
      </Row>
      <Card.Body>{data.author}</Card.Body>
    </Card>
  )
}
