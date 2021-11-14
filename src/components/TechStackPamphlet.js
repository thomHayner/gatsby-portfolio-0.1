import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, Nav, Tab, Figure } from 'react-bootstrap';

// Make it collapse into even rows of icons
// Maybe add a text description, one or two paragraphs, or maybe have it cycle through highlighting different stacks

export default function TechStackPamphlet() {
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
        <Container className="m-3" >
          <Row>
            <Col className="d-flex justify-content-center" >
              <h1>Technologies</h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mb-3" >
              <h5>How would you like it done?</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <h5>Serverless</h5>
                <p>Products designed for cloud hosted services.</p>
              </Row>
              <Row>
                <h5>Scalable</h5>
                <p>Ready to grow with you.</p>
              </Row>
              <Row>
                <h5>Simple</h5>
                <p>Automated updates and continuous development integration.</p>
              </Row>
            </Col>
            <Col className="d-flex justify-content-center" >
                  {data.allStrapiTechnology.nodes.map((node, i) => (
                    <Figure>
                      <Figure.Image
                        width={60}
                        height={60}
                        alt="60x60"
                        src={node.img.localFile.url}
                      />
                      <Figure.Caption>
                        {node.name}
                      </Figure.Caption>
                    {/* <img alt="" src={node.img.localFile.url} width="60rem" height="60rem" className="m-3" /> */}
                    </Figure>
                  ))}
            </Col>
          </Row>
        </Container>
      )}
    />
  )
}
