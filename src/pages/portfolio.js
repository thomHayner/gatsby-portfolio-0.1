import React from "react";
import { Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import TechStackCatalog from "../components/TechStackCatalog";
import ServicesPamphlet from "../components/ServicesPamphlet";
import ProjectDisplayCase from "../components/ProjectDisplayCase";

export default function PortfolioPage() {
  return (
    <Layout>
      <Container id="services" className="">
        <Row><br/></Row>
        <Row><br/></Row>
        <Row><hr/></Row>
        <Row><ServicesPamphlet/></Row>
        <Row><hr/></Row>
        <Row><TechStackCatalog/></Row>
        {/* {certifications could possibly go here} */}
        <Row><hr/></Row>
        <Row><ProjectDisplayCase/></Row>
        {/* {testimonials could possibly go here} */}
        <Row><br/></Row>
        <Row><br/></Row>
        <Row><br/></Row>
      </Container>
    </Layout>
  )
}
