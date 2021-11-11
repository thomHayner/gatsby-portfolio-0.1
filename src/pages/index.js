import * as React from "react";
// import { StaticQuery, graphQL } from 'gatsby';
import { Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";

// // styles
// const codeStyles = {
//   color: "#8A6534",
// }

// // data
// const links = [
//   {
//     color: "#663399",
//   },
// ]

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Container>
          <Row><br/></Row>
          <Row><br/></Row>
          <Row><hr/></Row>
          <Row><h1>WELCOME TO THE SITE!!!!!!</h1></Row>
          <Row><hr/></Row>
          <Row><br/></Row>
          {/* some content would go here */}
          <Row><br/></Row>
          <Row><br/></Row>
          <Row><br/></Row>
        </Container>
      </Layout>
    </main>
  )
}

export default IndexPage
