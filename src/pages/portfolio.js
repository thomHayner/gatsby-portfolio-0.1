import React from "react";
import { Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import Seo from '../components/seo';
import TechStackPamphlet from "../components/portfolio/TechStackPamphlet";
import ServicesPamphlet from "../components/portfolio/ServicesPamphlet";
// import ProjectPamphlet from "../components/portfolio/ProjectPamphlet";

export default function PortfolioPage() {
  return (
    <Layout>
      <Container id="services">
        <Row className='min-vh-100 align-content-center border border-green'>
          <ServicesPamphlet />
        </Row>
        {/* <Row><hr/></Row> */}
        <Row>
          <TechStackPamphlet />
        </Row>
        {/* <Row><hr/></Row> */}
        <Row>
          {/* {certifications go here} */}
        </Row>
        {/* <Row><hr/></Row> */}
        {/* <Row>
          <ProjectPamphlet />
        </Row> */}
      </Container>
    </Layout>
  )
};

export const Head = () => (
  <Seo title="Portfolio" />
);
