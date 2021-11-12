import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, Nav, Tab, Tabs, TabPane } from 'react-bootstrap';

export default function TechStackCatalog() {
  return (
    <StaticQuery
      query={graphql`
        query techStackBadges {
          allStrapiTechnology(sort: {fields: displayOrder, order: ASC}, limit: 8) {
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
        <Container>
          
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab" className="mb-3" variant="pills" >
              {data.allStrapiTechnology.nodes.map((node, i) => (
                <TabPane key={node.id} eventKey={node.name} title={ <img alt="" src={node.img.localFile.url} width="60" height="60" /> }>
                  {node.description}
                </TabPane>
              ))}
            </Tabs>
          {/* // */}
            <Tab.Container>
              <Nav variant="pills" className="flex-row">
              {data.allStrapiTechnology.nodes.map((node, i) => (
                <Nav.Item>
                  <Nav.Link eventKey={node.name}>
                    <img alt="" src={node.img.localFile.url} width="60" height="60" />
                  </Nav.Link>
                </Nav.Item>
              ))}
              </Nav>
            </Tab.Container>
          {/* // */}
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col>
                
                
                </Col>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" style={{ backgroundColor: "rgba(255,255,255,.6)" }} >Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                {/* <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      What 1
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      Who 2
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      Which 3
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      Where 4
                    </Tab.Pane>
                  </Tab.Content>
                </Col> */}
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Tab 6</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </Tab.Container>

        </Container>
      )}
    />
  )
}
