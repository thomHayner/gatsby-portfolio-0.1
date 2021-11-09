import React from "react";
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
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
        <Row>
          <h1>Contact Us</h1>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="" controlId="">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your name..."/>
              </Form.Group>
              <Form.Group className="" controlId="">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email address..."/>
              </Form.Group>
              <Form.Group className="" controlId="">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="name" placeholder="What is this about..."/>
              </Form.Group>
              <Form.Group className="" controlId="">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="What would you like to tell us..."/>
              </Form.Group>
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
