import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

// Make it collapse into even rows of icons
// Maybe add a text description, one or two paragraphs, or maybe have it cycle through highlighting different stacks

export default function TechStackPamphlet() {
  return (
    <StaticQuery
      query={graphql`
      query techStackPamphlet {
        strapiTechStackPamphlet {
          id
          title
          subTitle
          techBulletPoint {
            id
            text
            title
          }
          devIcons {
            localFile {
              url
            }
          }
        }
      }
      `} 

      render={data => (
        <Container className="m-3" >
          <Row>
            <Col className="d-flex justify-content-center" >
              <h1>{data.strapiTechStackPamphlet.title}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mb-3" >
              <h5>{data.strapiTechStackPamphlet.subTitle}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              {data.strapiTechStackPamphlet.techBulletPoint.map(bulletPoint => (
                <Row key={"bulletPoint_" + bulletPoint.id} className="m-3" >
                  <h5>{bulletPoint.title}</h5>
                  <p>{bulletPoint.text}</p>
                </Row>
              ))}
            </Col>
            <Col className="d-flex justify-content-center" >
                  {data.strapiTechStackPamphlet.devIcons.map(devIcon => (
                      <img  key={"devIcon_" + devIcon.id} alt="" src={devIcon.localFile.url} width="60rem" height="60rem" className="m-3" />
                  ))}
            </Col>
          </Row>
        </Container>
      )}
    />
  )
}
