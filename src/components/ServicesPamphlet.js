import React from 'react';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import ServicesCard from '../components/ServicesCard';
import DATA from '../assets/content/services-pamphlet.json';

export default function ServicesPamphlet() {
  return (
    <Container className="" >
      <Row>
        <Col className="d-flex justify-content-center" >
          <h1>{DATA.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mb-3" >
          <h5>{DATA.subTitle}</h5>
        </Col>
      </Row>
      <Row>
        <CardGroup className="d-flex flex-wrap justify-content-center" >
          {DATA.services.map(node => (
            <Col key={node.id} className="col-lg-4 col-md-6 col-sm-12" >
              <ServicesCard data={node} />
            </Col>
          ))}
        </CardGroup>
      </Row>
    </Container>
  )
}
