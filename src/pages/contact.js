import React from "react";
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap'
import Layout from "../components/layout";

// https://material.io/design/color/dark-theme.html#properties
// Background #121212
// Dark Primary #1F1B24

const addressArea = {
  minWidth: "160px",
}

function ContactPage() {
  return (
    <Layout>
      <Container>
        <Row><hr/></Row>
        <Row><hr/></Row>
        <Row>
          <h1>Contact Us</h1>
        </Row>
        <Row><hr/></Row>
        <Row>
          <Col>
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
              >
                <Form.Control type="name" placeholder="Enter your name..."/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="Enter your email address..."/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Subject"
                className="mb-3"
              >
                <Form.Control type="name" placeholder="What is this about..."/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Message"
                className="mb-3"
              >
                <Form.Control as="textarea" rows={5} placeholder="What would you like to tell us..."/>
              </FloatingLabel>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={2} style={addressArea}>
            <address>
                1023 Walnut St<br/>
                Boulder, CO<br/>
                80302<br/>
            </address>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default ContactPage;
