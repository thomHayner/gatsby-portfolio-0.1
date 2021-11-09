import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/layout";
import TechStackCatalog from "../components/TechStackCatalog";
import ServicesPamphlet from "../components/ServicesPamphlet";
import ProjectDisplayCase from "../components/ProjectDisplayCase";

export default function PortfolioPage() {
  return (
    <Layout>
      <Container id="services" className="">
        <ServicesPamphlet/>
      </Container>
      <hr/>
      <Container id="techStack" className="">
        <TechStackCatalog/>
      </Container>
      <hr/>
      <Container id="projects" className="">
        <ProjectDisplayCase/>
      </Container>
    </Layout>
  )
}
