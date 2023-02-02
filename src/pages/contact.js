import * as React from 'react';
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
  //// [START: Form Values] ////
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const form = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };
  const handleFormReset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }
  //// [END: Form Values] ////

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
                  aria-describedby='floatingInputContactName'
                  type="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInputContactEmail"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  aria-describedby='floatingInputContactEmail'
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInputContactSubject"
                label="Subject"
                className="mb-3"
              >
                <Form.Control
                  aria-describedby='floatingInputContactSubject'
                  type="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextareaContactMessage"
                label="Message"
                className="mb-3"
              >
                <Form.Control
                  aria-describedby='floatingTextareaContactMessage'
                  as="textarea"
                  style={{ height: '100px'}}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </FloatingLabel>

              <Button
                variant="primary"
                type="submit"
                className="mb-3"
              >
                Submit
              </Button>

            </Form>
          </Col>
          <Col className="ps-5 col-2" style={addressArea}>
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
                    <Row>{contentData.contactCity}, {contentData.contactState}, {contentData.contactCountry}</Row>
                  : 
                    <Row>{contentData.contactCity}, {contentData.contactState}</Row>
                :
                  contentData.contactCountry ?
                    <Row>{contentData.contactCity}, {contentData.contactCountry}</Row>
                  :
                    <Row>{contentData.contactCity}</Row>
                
              : 
                contentData.contactState ?
                  contentData.contactCountry ?
                    <Row>{contentData.contactState}, {contentData.contactCountry}</Row>
                  :
                    <Row>{contentData.contactState}</Row>
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
