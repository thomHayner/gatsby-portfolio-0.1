import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import contentData from '../../assets/content/services-pamphlet.json';

export default function ServicesPamphlet() {
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center'>
          <h2 className='fs-1 text-lightest-slate'>{contentData.title}</h2> 
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          <h3 className='text-light-slate'>{contentData.subTitle}</h3>
        </Col>
      </Row>
      <Row>
        {contentData.services.map(service => (
          <Col key={`Services_${service.id}`} className='col-12 col-md-6 col-lg-4 p-2'>
            <Card className='p-3 h-100 bg-dark-navy border border-1 border-green border-opacity-75 rounded shadow'>
              <Card.Title className='text-lightest-slate'>
                {service.title}
              </Card.Title>
              <Card.Body className='p-0 text-light-slate'>
                {service.text}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
};
