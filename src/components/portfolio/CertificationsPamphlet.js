import * as React from 'react';
import { Container, Col, Row, Nav, Tab } from 'react-bootstrap';
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
        <Col className="d-flex justify-content-center mb-3" >
          <h5>{contentData.subTitle}</h5>
        </Col>
      </Row>
      {contentData.certifications.map((cert) => (
        <Container className='d-inline-flex bg-seconday p-3 rounded border border-pink'>
          <div className='m-1 me-2'>
            <img
              className='rounded'
              alt={cert.img.alt}
              src={HackReactor}
              width='200'
              height='200'
            />
          </div>
          <div className='m-3'>
            <span className='fs-4 text-lightest-slate'>{cert.certificate}</span><br />
            <span className='fs-5 text-light-slate'>{cert.organization}</span><br />
            <span className='fs-6 text-lightest-slate'>{cert.description}</span>
          </div>
        </Container>
      ))}
    </Container>
  )
};
