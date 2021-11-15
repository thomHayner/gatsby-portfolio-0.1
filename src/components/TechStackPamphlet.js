import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import DATA from '../assets/content/tech-stack-pamphlet.json'

// or maybe have it cycle through highlighting different stacks
// decide whether to use devicons font or to import all of the files

export default function TechStackPamphlet() {
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
            <Col className="col-xl-4 col-lg-4 col-12" >
              {DATA.techBulletPoint.map(bulletPoint => (
                <Row key={"bulletPoint_" + bulletPoint.id} className="m-3" >
                  <h5>{bulletPoint.title}</h5>
                  <p>{bulletPoint.text}</p>
                </Row>
              ))}
            </Col>
            <Col className="col-xl-8 col-lg-8 col-12 d-flex justify-content-center flex-wrap" >
              {/* {data.strapiTechStackPamphlet.devIcons.map(devIcon => (
                // <Card  key={"devIcon_" + devIcon.id} className="bg-success " >
                  <img key={"devIcon_" + devIcon.id} alt="" src={devIcon.localFile.url} width="75rem" height="75rem" className="m-3" />
                // </Card>
              ))} */}
            </Col>
          </Row>
        </Container>
  )
}
