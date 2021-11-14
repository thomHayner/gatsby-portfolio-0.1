import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import TechStackPamphlet from "../components/TechStackPamphlet";
import ServicesPamphlet from "../components/ServicesPamphlet";
import ProjectPamphlet from "../components/ProjectPamphlet";

export default function PortfolioPage() {
  return (
    <Layout>
      <Container id="services" className="">
        <Row><ServicesPamphlet/></Row>
        <Row><br/></Row>
        <Row><hr/></Row>
        <Row><TechStackPamphlet/></Row>
        {/* {certifications could possibly go here} */}
        <Row><br/></Row>
        <Row><hr/></Row>
        <Row><ProjectPamphlet/></Row>
        {/* {testimonials could possibly go here} */}
      </Container>
    </Layout>
  )
}
