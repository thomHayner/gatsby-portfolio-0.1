import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioPage from './portfolio'
import Seo from '../components/seo';
import '../index.scss';

const IndexPage = () => {
  return (
    <main className="bg-primary" >
      <PortfolioPage />
    </main>
  )
}

export default IndexPage

//// DEVNOTE:
/* This was moved from src/pages/index.js, the main entry point for this page, 
so that it would populate a browser's tab with a title.  Do some more research 
to learn about dublication / de-duplication in these scenarios. */

export const Head = () => (
  <Seo title="Thomas Hayner" />
);
