import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import TechStackCatalog from "../components/TechStackCatalog";
import ServicesPamphlet from "../components/ServicesPamphlet";
import ProjectDisplayCase from "../components/ProjectDisplayCase";

export default function PortfolioPage() {
  return (
    <Layout>
      <Container id="services" className="">
        <Row><ServicesPamphlet/></Row>
        <Row><br/></Row>
        <Row><hr style={{ maxWidth: "200vw" }} /></Row>
        <Row>
          <Col className="d-flex justify-content-center" >
            <h1>Skills</h1>
          </Col>
        </Row>
        <Row><br/></Row>
        <Row><TechStackCatalog/></Row>
        {/* {certifications could possibly go here} */}
        <Row><br/></Row>
        <Row><hr/></Row>
        <Row>
          <Col className="d-flex justify-content-center" >
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row><br/></Row>
        <Row><ProjectDisplayCase/></Row>
        {/* {testimonials could possibly go here} */}
      </Container>
    </Layout>
  )
}
