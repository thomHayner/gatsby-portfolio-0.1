import * as React from 'react';
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap';
import HackReactor from '../../assets/images/HackReactorLogo.png';
import contentData from '../../assets/content/certifications-pamphlet.json';

export default function CertificationsPamphlet() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <h2 className='fs-1 text-lightest-slate'>{contentData.title}</h2>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <h3 className='text-light-slate'>{contentData.subTitle}</h3>
        </Col>
      </Row>
      <CardGroup className='px-3'>
        {contentData.certifications.map((certificate) => (
          <Card
            key={'certification_' + certificate.id}
            className='p-2 pe-md-4 d-inline-flex bg-light-navy border border-2 border-green border-opacity-50 rounded shadow'
          >
            <Row className='g-0'>
              <Col className='col-12 col-md-4 col-lg-3 d-flex align-items-center justify-content-center justify-content-md-start'>
                <img
                  className='rounded'
                  alt={certificate.img.alt}
                  src={HackReactor}
                  width='200'
                  height='194.5'
                />
              </Col>
              <Col className='col-12 col-md-8 col-lg-9 mt-4 my-md-auto justify-content-center justify-content-md-start'>
                <Card.Title className='text-center text-md-start'>
                  <h4 className='text-lightest-slate mb-1'>{certificate.certificate}</h4>
                  <h5 className='text-light-slate'>{certificate.organization}</h5>
                </Card.Title>
                <Card.Body className='p-md-0 m-0 mt-3 fs-6 text-lightest-slate'>{certificate.description}</Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </CardGroup>
    </Container>
  )
};
