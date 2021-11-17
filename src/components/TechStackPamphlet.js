import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contentData from '../assets/content/tech-stack-pamphlet.json';
import { DevIcons } from '../assets/images/techStackIcons';

export default function TechStackPamphlet() {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center" >
          <h1 className="text-warning" >{contentData.title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mb-3" >
          <h5 className="text-warning" >{contentData.subTitle}</h5>
        </Col>
      </Row>
      <Row className="my-auto" >
        <Col className="col-xl-4 col-lg-3 col-12" >
          {contentData.techBulletPoint.map(bulletPoint => (
            <Row key={"bulletPoint_" + bulletPoint.id} className="m-3 pt-2 border-dark border rounded bg-secondary" >
              <h5 className="text-warning " >{bulletPoint.title}</h5>
              <p>{bulletPoint.text}</p>
            </Row>
          ))}
        </Col>
        <Col className="col-xl-8 col-lg-9 col-12 d-flex justify-content-center flex-wrap bg-tertiary border-dark rounded" >
          {DevIcons.map((DevIcon, i) => (
            <DevIcon key={"devIcon_" + i} className="m-md-3 m-sm-2" style={{ height: "75px", width: "75px" }} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}
