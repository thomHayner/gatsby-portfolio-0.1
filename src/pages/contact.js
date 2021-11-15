import React, { /* useState */ } from 'react';
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import Layout from '../components/layout';
import CONTENT from '../assets/content/contact-info.json';

// https://material.io/design/color/dark-theme.html#properties
// Background #121212
// Dark Primary #1F1B24

const addressArea = {
  minWidth: "160px",
}

export default function ContactPage() {
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
        <Row><h1>{CONTENT.title}</h1></Row> 
        <Row><hr/></Row>
        <Row><br/></Row>
        <Row>
          <Col>
            <Form className="text-dark" >
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
          <Col className="ps-5 col-2" style={addressArea}>
            <address>
              {CONTENT.contactAddressName ? <Row>{CONTENT.contactAddressName}</Row> : '' }
              {CONTENT.contactAddress1 ? <Row>{CONTENT.contactAddress1}</Row> : '' }
              {CONTENT.contactAddress2 ? <Row>{CONTENT.contactAddress2}</Row> : '' }
              {CONTENT.contactAddress3 ? <Row>{CONTENT.contactAddress3}</Row> : '' }
              {CONTENT.contactAddress4 ? <Row>{CONTENT.contactAddress4}</Row> : '' }
              {CONTENT.contactAddress5 ? <Row>{CONTENT.contactAddress5}</Row> : '' }
              {CONTENT.contactCity ? 
                CONTENT.contactState ? 
                  CONTENT.contactCountry ? 
                    <Row>{CONTENT.contactCity}, {CONTENT.contactState}, {CONTENT.contactCountry}</Row> : <Row>{CONTENT.contactCity}, {CONTENT.contactState}</Row>
                :
                  CONTENT.contactCountry ?
                  <Row>{CONTENT.contactCity}, {CONTENT.contactCountry}</Row> : <Row>{CONTENT.contactCity}</Row>
                
              : 
                CONTENT.contactState ? 
                  CONTENT.contactCountry ? 
                    <Row>{CONTENT.contactState}, {CONTENT.contactCountry}</Row> : <Row>{CONTENT.contactState}</Row>
              :
                CONTENT.contactCountry ? 
                <Row>{CONTENT.contactCountry}</Row> : ''
              }
              {CONTENT.contactPostalCode ? <Row>{CONTENT.contactPostalCode}</Row> : '' }
              {CONTENT.contactPhone ? <Row>{CONTENT.contactPhone}</Row> : '' }
              {CONTENT.contactEmail ? <Row>{CONTENT.contactEmail}</Row> : '' }
            </address>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
