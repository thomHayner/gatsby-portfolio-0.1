import * as React from 'react';
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import Layout from '../components/layout';
import axios from "axios";
import SEO from '../components/seo';
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
  const [isSubmitted, setIsSubmitted] = React.useState(false);

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
    setIsSubmitted(true);
  }

  const handleClearSubmitted = () => {
    setIsSubmitted(false);
  };
  //// [END: Form Values] ////

  //// [START: GetForm Functions] ////
  const [serverState, setServerState] = React.useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      handleFormReset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setServerState({ ...serverState, submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/0cb59c9b-7396-48c6-a967-f947e62882e0",
      data: form
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  //// [END: GetForm Functions] ////

  //// [START: Page Components] ////
  const FormDisplay = () => (
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
        onClick={(e) => handleOnSubmit(e)}
      >
        Submit
      </Button>

    </Form>
  );

  const SubmittedDisplay = () => (
    <Container>
      <Row><p>{`Your message has been sent`}</p></Row>
      <Row><p>{`We'll get back to you as soon as possible`}</p></Row>
      <Button
        variant="primary"
        type="submit"
        className="mb-3"
        // onClick={(e) => handleOnSubmit(e)}
      >
        Go To Portfolio
      </Button>
      <Button
        variant="primary"
        type="submit"
        className="mb-3"
        onClick={(e) => handleClearSubmitted(e)}
      >
        New Message
      </Button>
    </Container>
  );

  const ReturnAddress = () => (
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
  );
  //// [END: Page Components] ////

  return (
    <Layout>
      <Container>
        <Row><h1>{contentData.title}</h1></Row> 
        <Row><hr/></Row>
        <Row><br/></Row>
        <Row>
          <Col>
            {isSubmitted ? <SubmittedDisplay /> : <FormDisplay />}
          </Col>
          <Col className="ps-5 col-2" style={addressArea}>
            <ReturnAddress />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};

export const Head = () => (
  <SEO title="Contact" />
);
