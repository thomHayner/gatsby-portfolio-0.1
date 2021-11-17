import React from 'react';
import { Container, Col, Row, Nav, Tab } from 'react-bootstrap';
import ProjectCard  from './ProjectCard';

// at "md" collapse down to vertical stack - done
// at "sm" make it collapse into cards with overlays

// can this be hooked up directly to github?
// or maybe just have a github button on each card

export default function ProjectPamphlet() {
  return (
    <Container className="m-3" >
      <Row>
        <Col className="d-flex justify-content-center" >
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mb-3" >
          <h5>Things that have worked before...</h5>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center" >
          <Tab.Container id="" defaultActiveKey="1" >
            <Row>
              <Col className="col-2" />
              <Col className="col-xl-1 col-lg-1 col-12" >
                <Nav variant="pills" className="flex-row">
                  {/* {data.allStrapiSkill.nodes.map((node, i) => (
                    <Nav.Item>
                      <Nav.Link eventKey={node.id}>
                        <img alt="" src={node.img.localFile.url} width="60rem" height="60rem" />
                      </Nav.Link>
                    </Nav.Item>
                  ))} */}
                  <Nav.Item>
                      <Nav.Link eventKey="1">
                        <img alt="Coming Soon!" src="" width="60rem" height="60rem" />
                      </Nav.Link>
                    </Nav.Item><Nav.Item>
                      <Nav.Link eventKey="2">
                        <img alt="Coming Soon!" src="" width="60rem" height="60rem" />
                      </Nav.Link>
                    </Nav.Item><Nav.Item>
                      <Nav.Link eventKey="3">
                        <img alt="Coming Soon!" src="" width="60rem" height="60rem" />
                      </Nav.Link>
                    </Nav.Item>
                </Nav>
              </Col>
              <Col className="col-xl-7 col-lg-7 col-12" >
                <Tab.Content>
                  {/* {data.allStrapiSkill.nodes.map((node, i) => (
                    <Tab.Pane eventKey={node.id}>
                      <ProjectCard data={node} />
                    </Tab.Pane>
                  ))} */}
                  <Tab.Pane eventKey="1" >
                    <ProjectCard data={{ name: "project 1", description: "First Project To Display: Coming Soon!" }} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="2" >
                    <ProjectCard data={{ name: "project 2", description: "Second Project To Display: Coming Soon!" }} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="3" >
                    <ProjectCard data={{ name: "project 3", description: "Third Project To Display: Coming Soon!" }} />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col className="col-2" />
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  )
}
