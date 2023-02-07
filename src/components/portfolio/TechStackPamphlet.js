import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contentData from '../../assets/content/tech-stack-pamphlet.json';
import { DevIcons } from '../../assets/images/techStackIcons';

export default function TechStackPamphlet() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center" >
          <h1 className="text-lightest-slate" >{contentData.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center" >
          <h5 className="text-light-slate" >{contentData.subTitle}</h5>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-lg-3 col-xl-4 my-auto" >
          {contentData.techBulletPoint.map(bulletPoint => (
            <Row key={"bulletPoint_" + bulletPoint.id} className="m-3 pt-2 border-blue border rounded" >
              <h5 className="text-lightest-slate" >{bulletPoint.title}</h5>
              <p className="text-light-slate" >{bulletPoint.text}</p>
            </Row>
          ))}
        </Col>
        <Col className="col-12 col-lg-9 col-xl-8 d-flex justify-content-center flex-wrap bg-secondary border-tertiary rounded" >
          {DevIcons.map((DevIcon, i) => (
            <DevIcon key={"devIcon_" + i} className="m-md-3 m-sm-2" style={{ height: "75px", width: "75px" }} />
          ))}
        </Col>
      </Row>
    </Container>
  )
};
