import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/layout";

export default function PortfolioPage() {
  return (
    <Layout>
      <Container id="techStack" className=""></Container>
      <hr/>
      <Container id="services" className=""></Container>
      <hr/>
      <Container id="projects" className=""></Container>
    </Layout>
  )
}
