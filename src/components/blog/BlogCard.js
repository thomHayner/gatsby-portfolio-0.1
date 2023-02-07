import React from 'react';
import { Card, Row } from 'react-bootstrap';

export default function BlogCard({ data }) {
  return (
    <Card className="bg-light-navy text-lightest-slate">
      <Card.Title>{data.title}</Card.Title>
      <Row>
        <Card.Subtitle>{data.date}</Card.Subtitle>
        <Card.Subtitle>{data.author}</Card.Subtitle>
      </Row>
      <Card.Body>{data.author}</Card.Body>
    </Card>
  )
}
