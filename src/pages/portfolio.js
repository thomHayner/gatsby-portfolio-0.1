import React from "react";
import { Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from '../components/seo';
import TechStackPamphlet from "../components/TechStackPamphlet";
import ServicesPamphlet from "../components/ServicesPamphlet";
import ProjectPamphlet from "../components/ProjectPamphlet";

export default function PortfolioPage() {
  return (
    <Layout>
      <Container id="services" className="">
        <Row>
          <ServicesPamphlet/>
        </Row>
        <Row>
          <hr/>
        </Row>
        <Row>
          <TechStackPamphlet/>
        </Row>
        <Row>
          {/* <hr/> */}
        </Row>
        <Row>
          {/* {certifications could possibly go here} */}
        </Row>
        {/* <Row>
          <br/>
        </Row> */}
        <Row>
          {/* <hr/> */}
        </Row>
        <Row>
          {/* <ProjectPamphlet/> */}
        </Row>
        <Row>
          {/* <hr/> */}
        </Row>
        <Row>
          {/* {testimonials could possibly go here} */}
        </Row>
      </Container>
    </Layout>
  )
};

export const Head = () => (
  <SEO title="Portfolio" />
)