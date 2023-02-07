import * as React from 'react';
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap';
import HackReactor from '../../assets/images/HackReactorLogo.png';
import contentData from '../../assets/content/certifications-pamphlet.json';

export default function CertificationsPamphlet() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center" >
          <h1>{contentData.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center" >
          <h3>{contentData.subTitle}</h3>
        </Col>
      </Row>
      <CardGroup className='px-3'>
        {contentData.certifications.map((cert) => (
          <Card className='p-2 pe-md-4 d-inline-flex bg-dark-navy border border-pink-tetrad border-opacity-75 rounded'>
            <Row className='g-0'>
              <Col className='col-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-center justify-content-md-start'>
                <img
                  className='rounded'
                  alt={cert.img.alt}
                  src={HackReactor}
                  width='200'
                  height='194.5'
                />
              </Col>
              <Col className='col-12 col-md-8 col-lg-9 mt-4 my-md-auto justify-content-center justify-content-md-start'>
                <Card.Title className='text-center text-md-start'>
                  <h4 className='text-lightest-slate mb-1'>{cert.certificate}</h4>
                  <h5 className='text-light-slate'>{cert.organization}</h5>
                </Card.Title>
                <Card.Body className='p-md-0 m-0 mt-3 fs-6 text-lightest-slate'>{cert.description}</Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </CardGroup>
    </Container>
  )
};
