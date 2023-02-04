import React from 'react';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import ServicesCard from './ServicesCard';
import contentData from '../../assets/content/services-pamphlet.json';

export default function ServicesPamphlet() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center" >
          <h1 className="text-light" >{contentData.title}</h1> 
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center" >
          <h5 className="text-muted" >{contentData.subTitle}</h5>
        </Col>
      </Row>
      <Row>
        <CardGroup className="d-flex flex-wrap my-4" >
          {contentData.services.map(node => (
            <Col key={`Services_${node.id}`} className="col-12 col-md-6 col-lg-4 p-2">
              <ServicesCard data={node} />
            </Col>
          ))}
        </CardGroup>
      </Row>
    </Container>
  )
};
