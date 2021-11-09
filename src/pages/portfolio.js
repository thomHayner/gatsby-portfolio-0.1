import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/layout";
import TechStackDisplayCase from "../components/TechStackDisplayCase";
import ServicesPamphlet from "../components/ServicesPamphlet";

export default function PortfolioPage() {
  return (
    <Layout>
      <Container id="services" className="">
        <ServicesPamphlet/>
      </Container>
      <hr/>
      <Container id="techStack" className="">
        <TechStackDisplayCase/>
      </Container>
      <hr/>
      <Container id="projects" className="">
        {/* data and then map the data */}
      </Container>
    </Layout>
  )
}
