import * as React from 'react';
import { Container, Button, Row, Col, } from 'react-bootstrap';
import CheckCircle from '../../assets/icons/green-check-circle.svg'
import { Link } from 'gatsby';

export default function ThankYou({ handleClearSubmitted }) {
  return (
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
              variant='lightest-navy'
              type='link'
              className='border border-dark-navy shadow text-lightest-slate'
            >
              {`Go To Portfolio`}
            </Button>
          </Link>
        </Col>

        <Col className='d-flex'>
          <Button
            variant='lightest-navy'
            type='reset'
            className='border border-dark-navy shadow text-lightest-slate'
            onClick={handleClearSubmitted}
          >
            {`New Message`}
          </Button>
        </Col>
      </Row>
    </Container>
  )
};
