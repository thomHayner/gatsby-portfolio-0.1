import React from 'react';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import ServicesCard from '../components/ServicesCard';
import contentData from '../assets/content/services-pamphlet.json';

export default function ServicesPamphlet() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center" >
          <h1 className="text-info" >{contentData.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mb-3" >
          <h5 className="text-info" >{contentData.subTitle}</h5>
        </Col>
      </Row>
      <Row>
        <CardGroup className="d-flex flex-wrap justify-content-center" >
          {contentData.services.map(node => (
            <Col key={`Services_${node.id}`} className="col-lg-4 col-md-6 col-sm-12" >
              <ServicesCard data={node} />
            </Col>
          ))}
        </CardGroup>
      </Row>
    </Container>
  )
}
