import React, { /* useState */ } from 'react';
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import Layout from '../components/layout';
import Seo from '../components/seo';
import contentData from '../assets/content/contact-info.json';

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
      <Seo title="Contact" />
      <Container>
        <Row><h1>{contentData.title}</h1></Row> 
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
          <Col className="ps-5 col-2" style={addressArea} >
            <address>
              {contentData.contactAddressName ? <Row>{contentData.contactAddressName}</Row> : '' }
              {contentData.contactAddress1 ? <Row>{contentData.contactAddress1}</Row> : '' }
              {contentData.contactAddress2 ? <Row>{contentData.contactAddress2}</Row> : '' }
              {contentData.contactAddress3 ? <Row>{contentData.contactAddress3}</Row> : '' }
              {contentData.contactAddress4 ? <Row>{contentData.contactAddress4}</Row> : '' }
              {contentData.contactAddress5 ? <Row>{contentData.contactAddress5}</Row> : '' }
              {contentData.contactCity ? 
                contentData.contactState ? 
                  contentData.contactCountry ? 
                    <Row>{contentData.contactCity}, {contentData.contactState}, {contentData.contactCountry}</Row> : <Row>{contentData.contactCity}, {contentData.contactState}</Row>
                :
                  contentData.contactCountry ?
                  <Row>{contentData.contactCity}, {contentData.contactCountry}</Row> : <Row>{contentData.contactCity}</Row>
                
              : 
                contentData.contactState ? 
                  contentData.contactCountry ? 
                    <Row>{contentData.contactState}, {contentData.contactCountry}</Row> : <Row>{contentData.contactState}</Row>
              :
                contentData.contactCountry ? 
                <Row>{contentData.contactCountry}</Row> : ''
              }
              {contentData.contactPostalCode ? <Row>{contentData.contactPostalCode}</Row> : '' }
              {contentData.contactPhone ? <Row>{contentData.contactPhone}</Row> : '' }
              {contentData.contactEmail ? <Row>{contentData.contactEmail}</Row> : '' }
            </address>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
