import React from 'react';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import ServicesCard from '../components/ServicesCard';
import DATA from '../assets/portfolio-content/services-pamphlet.json';

export default function ServicesPamphlet() {
  return (
    <Container className="m-3" >
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
        <CardGroup className="d-flex justify-content-center" >
          {DATA.services.map(node => (
            <Col key={node.id} >
              <ServicesCard data={node} />
            </Col>
          ))}
        </CardGroup>
      </Row>
    </Container>
  )
}
