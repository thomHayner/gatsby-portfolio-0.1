import React from 'react';
import { Container, Row, Col, ListGroup, } from 'react-bootstrap';
import contentData from '../../assets/content/tech-stack-pamphlet.json';
import { DevIcons } from './techStackIcons';

export default function TechStackPamphlet() {
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
      <Row className='bg-light-navy rounded shadow-lg'>
        <Col className='col-12 col-lg-4 my-auto ps-0 height-100'>
          <ListGroup className=''>
            {contentData.techBulletPoint.map((bulletPoint, i, a) => (
              <div>
                <ListGroup.Item key={'bulletPoint_' + bulletPoint.id} className='px-5 pb-0 bg-light-navy border-0' as='li' disabled>
                  <h5 className='text-lightest-slate'>
                    {bulletPoint.title}
                  </h5>
                  <p className='ps-0 pt-0 text-light-slate'>
                    {bulletPoint.text}
                  </p>
                </ListGroup.Item>
                {i < a.length-1 ? <div className='mx-5 mb-2 border-bottom border-2 border-green border-opacity-75' /> : <div />}
              </div>
            ))}
          </ListGroup>
        </Col>
        <Col className='col-12 col-lg-8 d-flex flex-wrap justify-content-center bg-lightest-navy rounded'>
          {DevIcons.map((DevIcon, i) => (
            <DevIcon key={'devIcon_' + i} className='m-1 m-sm-2 m-md-3' style={{ height: '75px', width: '75px' }} />
          ))}
        </Col>
      </Row>
    </Container>
  )
};
