import React from 'react';
import { Card } from 'react-bootstrap';

export default function BlogCard({ data }) {
  return (
    <Card className="bg-dark">
      <Card.Title>{data.title}</Card.Title>
      <Card.Subtitle>{data.publishedDate}</Card.Subtitle>
      <Card.Body>{data.abstract}</Card.Body>
    </Card>
  )
}
