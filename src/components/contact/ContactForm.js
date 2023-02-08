import * as React from 'react';
import { Form,FloatingLabel, Button, } from 'react-bootstrap';

export default function ContactForm({
  name,
  setName,
  email,
  setEmail,
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
        label='Name'
        className='mb-3'
      >
        <Form.Control
          aria-describedby='floatingInputContactName'
          type='text'
          name='Eame'
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
          name='Email'
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
          type='text'
          name='Subject'
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
          name='Message'
          placeholder='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </FloatingLabel>

      <Button
        variant='lightest-navy'
        type='submit'
        disabled={isButtonDisabled}
        className='mb-3 border border-dark-navy shadow text-lightest-slate'
        // onClick={!isButtonDisabled ? handleOnSubmit : null}
      >
        {isButtonDisabled ? 'Sending...' : 'Submit'}
      </Button>

    </Form>
  )
};
