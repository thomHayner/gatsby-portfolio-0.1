import * as React from 'react';
import '../index.scss';
import axios from 'axios';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import Layout from '../components/layout';
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import ReturnAddress from '../components/contact/ReturnAddress';
import CheckCircle from '../assets/icons/green-check-circle.svg'
import contentData from '../assets/content/contact-info.json';

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
      method: 'post',
      url: 'https://getform.io/f/0cb59c9b-7396-48c6-a967-f947e62882e0',
      data: form
    })
      .then(r => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  //// [END: GetForm Functions] ////

  //// [START: Page Components] ////
  const FormDisplay = () => (
    <Form className='h-100 p-2 bg-light-navy rounded shadow-lg text-dark' >

      <FloatingLabel
        controlId='floatingInputContactName'
        label='Name'
        className='mb-3'
      >
        <Form.Control
          aria-describedby='floatingInputContactName'
          type='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingInputContactEmail'
        label='Email'
        className='mb-3'
      >
        <Form.Control
          aria-describedby='floatingInputContactEmail'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingInputContactSubject'
        label='Subject'
        className='mb-3'
      >
        <Form.Control
          aria-describedby='floatingInputContactSubject'
          type='subject'
          placeholder='Subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingTextareaContactMessage'
        label='Message'
        className='mb-3'
      >
        <Form.Control
          aria-describedby='floatingTextareaContactMessage'
          as='textarea'
          style={{ height: '100px'}}
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </FloatingLabel>

      <Button
        variant='primary'
        type='submit'
        className='mb-3'
        onClick={(e) => handleOnSubmit(e)}
      >
        Submit
      </Button>

    </Form>
  );

  const SubmittedDisplay = () => (
    <Container className='h-100 p-2 py-auto bg-light-navy border border-success rounded shadow-lg'>
      <Row className='d-flex justify-content-center mt-5 mb-3'>
        <CheckCircle className='' style={{ height: '75px', width: '75px' }} />
      </Row>
      <Row>
        <p className='text-center'>
          {`Your message has been sent successfully`}
        </p>
      </Row>
      <Row>
        <p className='text-center'>
          {`We'll get back to you as soon as possible`}
        </p>
      </Row>
      <Row className='d-flex justify-content-center mt-3 mb-5'>
        <Col className='d-flex justify-content-end'>
          <Link
            to={'/'}
            className='nav-link'
            activeClassName='active'
          >
            <Button
              variant='dark'
              type='submit'
              className='btn bg-lightest-navy border border-dark-navy shadow text-lightest-slate'
            >
              {`Go To Portfolio`}
            </Button>
          </Link>
        </Col>

        <Col className='d-flex'>
          <Button
            variant='dark'
            type='submit'
            className='btn bg-lightest-navy border border-dark-navy shadow text-lightest-slate'
            onClick={(e) => handleClearSubmitted(e)}
          >
            {`New Message`}
          </Button>
        </Col>
      </Row>
    </Container>
  );
  //// [END: Page Components] ////

  return (
    <Layout>
      <Container>
        <Row><h1>{contentData.title}</h1></Row> 
        <Row><hr/></Row>
        <Row>
          <Col className='col-12 col-md-8 col-lg-9 col-xl-10'>
            {isSubmitted ? <SubmittedDisplay  /> : <FormDisplay />}
          </Col>
          <Col className='col-5 col-md-4 col-lg-3 col-xl-2'>
            <ReturnAddress />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};

export const Head = () => (
  <Seo title={contentData.title} />
);
