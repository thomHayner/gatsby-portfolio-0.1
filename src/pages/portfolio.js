import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import TechStackPamphlet from '../components/portfolio/TechStackPamphlet';
import ServicesPamphlet from '../components/portfolio/ServicesPamphlet';
import CertificationsPamphlet from '../components/portfolio/CertificationsPamphlet'
// import ProjectPamphlet from '../components/portfolio/ProjectPamphlet';
// import useResizableWindow from '../hooks/useResizableWindow';

export default function PortfolioPage() {
  // const dimensions = useResizableWindow();
  // const viewHeight = dimensions.height - 52;

  // React.useEffect(()=> {
  //   if (typeof window !== 'undefined') {
  //     window.resizeTo(1366, 768);
  //   };
  // }, [])

  return (
    <Layout>
      <Container id='services'>
        <Row className='align-content-center my-5 py-3'>
          <ServicesPamphlet />
        </Row>
        <Row><hr className='my-0' /></Row>
        <Row className='align-content-center my-5 py-3'>
          <TechStackPamphlet />
        </Row>
        <Row><hr className='my-0' /></Row>
        <Row className='align-content-center my-5 py-3'>
          <CertificationsPamphlet />
        </Row>
        {/* <Row><hr className='m-0' /></Row> */}
        {/* <Row className='align-content-center my-5 py-3'>
          <ProjectPamphlet />
        </Row> */}
      </Container>
    </Layout>
  )
};

//// DEVNOTE:
/* This was moved into src/pages/index.js, the main entry point for this page, 
so that it would populate a browser's tab with a title.  Do some more research 
to learn about dublication / de-duplication in these scenarios. */

// import Seo from '../components/seo';

// export const Head = () => (
//   <Seo title='Portfolio' />
// );
