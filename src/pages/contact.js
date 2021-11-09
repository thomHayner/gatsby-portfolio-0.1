import React from "react";
import { graphQL } from 'gatsby';
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
                <Form.Control type="name" placeholder="Name" required/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="Email" required/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Subject"
                className="mb-3"
              >
                <Form.Control type="subject" placeholder="Subject"/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Message"
                className="mb-3"
              >
                <Form.Control 
                  as="textarea" 
                  style={{ height: '100px'}} 
                  placeholder="Message" 
                  required 
                />
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
