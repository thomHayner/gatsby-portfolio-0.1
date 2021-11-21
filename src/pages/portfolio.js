import React from "react";
import { Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TechStackPamphlet from "../components/TechStackPamphlet";
import ServicesPamphlet from "../components/ServicesPamphlet";
import ProjectPamphlet from "../components/ProjectPamphlet";

export default function PortfolioPage() {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <Container id="services" className="">
        <Row><ServicesPamphlet/></Row>
        <Row><hr/></Row>
        <Row><TechStackPamphlet/></Row>
        {/* {certifications could possibly go here} */}
        <Row><br/></Row>
        <Row><hr/></Row>
        <ProjectPamphlet/>
        {/* {testimonials could possibly go here} */}
      </Container>
    </Layout>
  )
}
