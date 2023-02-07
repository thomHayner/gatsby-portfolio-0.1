import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import contentData from '../../assets/content/tech-stack-pamphlet.json';
import { DevIcons } from '../../assets/images/techStackIcons';

export default function TechStackPamphlet() {
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center' >
          <h1 className='text-lightest-slate' >{contentData.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center' >
          <h3 className='text-light-slate' >{contentData.subTitle}</h3>
        </Col>
      </Row>
      <Row>
        <Col className='col-12 col-lg-3 col-xl-4 my-auto' >
          {contentData.techBulletPoint.map(bulletPoint => (
            <Card key={'bulletPoint_' + bulletPoint.id} className='m-3 pt-2 bg-dark-navy border border-blue-tetrad border-opacity-75 rounded'>
              <Card.Title className='text-lightest-slate' >
                {bulletPoint.title}
              </Card.Title>
              <Card.Body className='text-light-slate' >
                {bulletPoint.text}
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col
          className='col-12 col-lg-9 col-xl-8 
            d-flex flex-wrap justify-content-center 
            bg-secondary  border border-orange-tetrad border-opacity-75 rounded'
        >
          {DevIcons.map((DevIcon, i) => (
            <DevIcon key={'devIcon_' + i} className='m-md-3 m-sm-2' style={{ height: '75px', width: '75px' }} />
          ))}
        </Col>
      </Row>
    </Container>
  )
};
