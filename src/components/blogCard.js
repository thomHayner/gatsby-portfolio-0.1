import React from 'react';
import { Card } from 'react-bootstrap';

export default function BlogCard({ data }) {
  return (
    <Card className="bg-dark text-light">
      <Card.Title>{data.title}</Card.Title>
      <Card.Subtitle>{data.date}</Card.Subtitle>
      {/* <Card.Body>{data.body}</Card.Body> // this needs to be limited to chars or it needs to use Fragment query method */}
    </Card>
  )
}
