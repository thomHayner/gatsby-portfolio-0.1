import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Col, Row, Nav, Tab } from 'react-bootstrap';
import ProjectCard  from './ProjectCard';

// at "md" collapse down to vertical stack - done
// at "sm" make it collapse into cards with overlays

export default function ProjectPamphlet() {
  return (
    <div>
    {/* <StaticQuery 
      query={graphql` 
        query projectCardDeck { 
          allStrapiSkill(sort: {fields: displayOrder, order: ASC}) { 
            nodes { 
              id 
              name 
              description 
              img { 
                localFile { 
                  url 
                } 
              } 
            } 
          } 
        } 
      `} 

      render={data => (
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
              <Tab.Container id="" defaultActiveKey={data.allStrapiSkill.nodes[0].id} >
                <Row>
                  <Col className="col-2" />
                  <Col className="col-xl-1 col-lg-1 col-12" >
                    <Nav variant="pills" className="flex-row">
                      {data.allStrapiSkill.nodes.map((node, i) => (
                        <Nav.Item>
                          <Nav.Link eventKey={node.id}>
                            <img alt="" src={node.img.localFile.url} width="60rem" height="60rem" />
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Col>
                  <Col className="col-xl-7 col-lg-7 col-12" >
                    <Tab.Content>
                      {data.allStrapiSkill.nodes.map((node, i) => (
                        <Tab.Pane eventKey={node.id}>
                          <ProjectCard data={node} />
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                  <Col className="col-2" />
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      )}
    /> */}
    </div>
  )
}
