import React from 'react';
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap';
import contentData from '../../assets/content/services-pamphlet.json';

export default function ServicesPamphlet() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center" >
          <h1 className="text-lightest-slate" >{contentData.title}</h1> 
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center" >
          <h5 className="text-light-slate" >{contentData.subTitle}</h5>
        </Col>
      </Row>
      <Row>
        <CardGroup className="d-flex flex-wrap my-4" >
          {contentData.services.map(service => (
            <Col key={`Services_${service.id}`} className="col-12 col-md-6 col-lg-4 p-2">
              <Card className="p-3 h-100 bg-primary border border-green shadow-lg">
                <Card.Title className="text-lightest-slate" >
                  {service.title}
                </Card.Title>
                <Card.Body className="p-0 text-light-slate" >
                  {service.text}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </Row>
    </Container>
  )
};
