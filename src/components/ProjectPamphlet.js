import React from 'react';
import { Container, Col, Row, Nav, Tab } from 'react-bootstrap';
import ProjectCard  from './ProjectCard';
import contentData from '../assets/content/portfolio-pamphlet.json';

// at "md" collapse down to vertical stack - done
// at "sm" make it collapse into cards with overlays

// can this be hooked up directly to github?
// or maybe just have a github button on each card

export default function ProjectPamphlet() {
  return (
    <Container className="m-3" >
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
      <Row>
        <Col className="d-flex justify-content-center" >
          <Tab.Container id="" defaultActiveKey="1" >
            <Row>
              <Col className="col-1" />
              <Col className="col-xl-1 col-lg-1 col-12" >
                <Nav variant="pills" className="flex-row">
                  {/* {contentData.projects.map((project, i) => (
                    <Nav.Item>
                      <Nav.Link eventKey={project.id}>
                        <img alt={project.name} src={project.media.tabUrl} width="60rem" height="60rem" />
                      </Nav.Link>
                    </Nav.Item>
                  ))} */}
                  <Nav.Item>
                      <Nav.Link eventKey="1">
                        <img alt={contentData.projects[0].name} src="" width="60rem" height="60rem" />
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
                  {/* {contentData.projects.map((project, i) => (
                    <Tab.Pane eventKey={project.id}>
                      <ProjectCard project={project} />
                    </Tab.Pane>
                  ))} */}
                  <Tab.Pane eventKey="1" >
                    <ProjectCard project={contentData.projects[0]} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="2" >
                    <ProjectCard project={contentData.projects[1]} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="3" >
                    <ProjectCard project={contentData.projects[2]} />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col className="col-2" />
            </Row>
          </Tab.Container>
        </Col>

        <Col />
      </Row>
    </Container>
  )
}
