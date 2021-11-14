import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import ServicesCard from '../components/ServicesCard';

export default function ServicesPamphlet() {
  return (
    <StaticQuery
      query={graphql`
        query servicesPamphlet {
          strapiServicesPamphlet {
            id
            title
            subTitle
            services {
              id
              title
              text
            }
          }
        }
      `} 

      render={data => (
        <Container className="m-3" >
          <Row>
            <Col className="d-flex justify-content-center" >
              <h1>{data.strapiServicesPamphlet.title}</h1>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center mb-3" >
              <h5>{data.strapiServicesPamphlet.subTitle}</h5>
            </Col>
          </Row>
          <Row>
            <CardGroup as="Col" className="d-flex justify-content-center" >
              {data.strapiServicesPamphlet.services.map(node => (
                <Col key={node.id} >
                  <ServicesCard data={node} />
                </Col>
              ))}
            </CardGroup>
          </Row>
        </Container>
      )}
    />
  )
}
