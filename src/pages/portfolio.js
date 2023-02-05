import React from "react";
import { Container, Row } from "react-bootstrap";
import Layout from "../components/layout";
import Seo from '../components/seo';
import TechStackPamphlet from "../components/portfolio/TechStackPamphlet";
import ServicesPamphlet from "../components/portfolio/ServicesPamphlet";
// import ProjectPamphlet from "../components/portfolio/ProjectPamphlet";
import useResizableWindow from "../hooks/useResizableWindow";

//// DEVNOTE:
/* The last <Row /> element on this page has it's height shortened by an 
additional 55px to account for the bottom navbar/footer. */

export default function PortfolioPage() {
  const dimensions = useResizableWindow();
  const viewHeight = dimensions.height - 52;

  React.useEffect(()=> {
    if (typeof window !== 'undefined') {
      window.resizeTo(1366, 768);
    };
  }, [])

  return (
    <Layout>
      <Container id="services">
        <Row
          style={{ minHeight: viewHeight }}
          className='align-content-center'
        >
          <ServicesPamphlet />
        </Row>
        <Row><hr className='m-0' /></Row>
        <Row
          style={{ minHeight: viewHeight - 55 }}
          className='align-content-center'
        >
          <TechStackPamphlet />
        </Row>
        {/* <Row><hr className='m-0' /></Row> */}
        {/* <Row
          style={{ minHeight: viewHeight }}
          className='align-content-center'
        >
          {`certifications go here`}
        </Row> */}
        {/* <Row><hr className='m-0' /></Row> */}
        {/* <Row
          style={{ minHeight: viewHeight }}
          className='align-content-center'
        >
          <ProjectPamphlet />
        </Row> */}
      </Container>
    </Layout>
  )
};

export const Head = () => (
  <Seo title="Portfolio" />
);
