import * as React from 'react';
import { Form, FloatingLabel, Container, Row, Col, Button, } from 'react-bootstrap';
import PrivacyPolicy from '../PrivacyPolicy';

export default function ContactForm({
  name,
  setName,
  email,
  setEmail,
  company,
  setCompany,
  website,
  setWebsite,
  subject,
  setSubject,
  message,
  setMessage,
  isButtonDisabled,
  handleOnSubmit,
}) {
  return (
    <Form
      className='h-100 p-2 bg-light-navy rounded shadow-lg text-dark'
      onSubmit={handleOnSubmit}
    >

      <FloatingLabel
        controlId='floatingInputContactName'
        label='Name*'
        className='mb-3'
      >
        <Form.Control
          aria-describedby='floatingInputContactName'
          type='text'
          name='Name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingInputContactEmail'
        label='Email*'
        className='mb-3'
      >
        <Form.Control
          aria-describedby='floatingInputContactEmail'
          type='email'
          name='Email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingInputContactCompany'
        label='Company'
        className='mb-3'
      >
        <Form.Control
          aria-describedby='floatingInputContactCompany'
          type='text'
          name='Company'
          placeholder='Company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingInputContactWebsite'
        label='Website'
        className='mb-3'
      >
        <Form.Control
          aria-describedby='floatingInputContactWebsite'
          type='url'
          name='Website'
          placeholder='Website'
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingInputContactSubject'
        label='Subject'
        className='mb-3'
      >
        <Form.Control
          aria-describedby='floatingInputContactSubject'
          type='text'
          name='Subject'
          placeholder='Subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId='floatingTextareaContactMessage'
        label='Message*'
        className='mb-3'
      >
        <Form.Control
          aria-describedby='floatingTextareaContactMessage'
          as='textarea'
          style={{ height: '100px'}}
          name='Message'
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </FloatingLabel>

      <Form.Control type="hidden" name="_gotcha" style={{ display: 'none !important' }} />
      
      <Container>
        <Row>
          <Col className='col-6'>
            <Button
              variant='lightest-navy'
              type='submit'
              disabled={isButtonDisabled}
              className='mb-3 border border-dark-navy shadow text-lightest-slate'
            >
              {isButtonDisabled ? 'Sending...' : 'Submit'}
            </Button>
          </Col>
          <Col className='col-6 d-flex justify-content-end align-items-end pe-0 text-green-tetrad'>
            <PrivacyPolicy />
          </Col>
        </Row>
      </Container>

    </Form>
  )
};
