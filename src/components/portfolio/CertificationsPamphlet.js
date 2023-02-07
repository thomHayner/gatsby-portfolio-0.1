import * as React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HackReactor from '../../assets/images/HackReactorLogo.png';
import contentData from '../../assets/content/certifications-pamphlet.json';

export default function CertificationsPamphlet() {
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center' >
          <h1>{contentData.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center' >
          <h3>{contentData.subTitle}</h3>
        </Col>
      </Row>
      {contentData.certifications.map((certificate) => (
        <div className='p-3 d-inline-flex bg-dark-navy border border-pink-tetrad border-opacity-75 rounded'>
          <div className='m-1 me-2'>
            <img
              className='rounded'
              alt={certificate.img.alt}
              src={HackReactor}
              width='200'
              height='200'
            />
          </div>
          <div className='m-3'>
            <span className='fs-4 text-lightest-slate'>{certificate.certificate}</span><br />
            <span className='fs-5 text-light-slate'>{certificate.organization}</span><br />
            <span className='fs-6 text-lightest-slate'>{certificate.description}</span>
          </div>
        </div>
      ))}
    </Container>
  )
};
