import React, { /* useState */ } from "react";
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap'
import Layout from "../components/layout";

// https://material.io/design/color/dark-theme.html#properties
// Background #121212
// Dark Primary #1F1B24

const addressArea = {
  minWidth: "160px",
}

function ContactPage() {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  return (
    <Layout>
      <Container>
        <Row><h1>Contact Us</h1></Row>
        <Row><hr/></Row>
        <Row><br/></Row>
        <Row>
          <Col>
            <Form style={{ color: "rgba(0,0,0,0.7)" }}>
              <FloatingLabel
                controlId="floatingInputContactName"
                label="Name"
                className="mb-3"
              >
                <Form.Control 
                  type="name" 
                  placeholder="Name" 
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputContactEmail"
                label="Email"
                className="mb-3"
              >
                <Form.Control 
                  type="email" 
                  placeholder="Email" 
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputContactSubject"
                label="Subject"
                className="mb-3"
              >
                <Form.Control 
                  type="subject" 
                  placeholder="Subject"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextareaContactMessage"
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
              <Button 
                variant="primary" 
                type="submit" 
                className="mb-3"
                handleSubmit={()=>{}}
              >
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
