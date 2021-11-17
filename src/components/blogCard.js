import React from 'react';
import { Card } from 'react-bootstrap';

export default function BlogCard({ data }) {
  return (
    <Card className="bg-dark text-light">
      <Card.Title>{data.title}</Card.Title>
      <Card.Subtitle>{data.date}</Card.Subtitle>
    </Card>
  )
}
