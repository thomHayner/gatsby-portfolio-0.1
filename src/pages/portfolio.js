import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/layout";
import TechStackDisplayCase from "../components/TechStackDisplayCase";

export default function PortfolioPage() {
  return (
    <Layout>
      <Container id="techStack" className="">
        <TechStackDisplayCase/>
        {/* data and then map the data */}
      </Container>
      <hr/>
      <Container id="services" className="">
        {/* data and then map the data */}
      </Container>
      <hr/>
      <Container id="projects" className="">
        {/* data and then map the data */}
      </Container>
    </Layout>
  )
}
