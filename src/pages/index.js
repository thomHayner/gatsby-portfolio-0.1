import * as React from "react";
// import { StaticQuery, graphQL } from 'gatsby';
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";
import PortfolioPage from './portfolio'
import '../index.scss';

const IndexPage = () => {
  return (
    <main>
      <PortfolioPage />
    </main>
  )
}

export default IndexPage
