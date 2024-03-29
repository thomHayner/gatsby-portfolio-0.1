import * as React from 'react';
import '../index.scss';
import axios from 'axios';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Seo from '../components/seo';
import Layout from '../components/layout';
import { Container, Row, Col } from 'react-bootstrap';
import contentData from '../assets/content/contact-info.json';
import ContactForm from '../components/contact/ContactForm';
import ThankYou from '../components/contact/ThankYou';
import ReturnAddress from '../components/contact/ReturnAddress';

// DEVNOTE: GetForm: https://docs.getform.io/
// DEVNOTE: GetForm: https://docs.getform.io/guides/gatsby/
// DEVNOTE: GetForm: https://blog.getform.io/building-a-gatsby-contact-form-using-getform/

// DEVNOTE: reCAPTCHA v3: https://www.npmjs.com/package/react-google-recaptcha-v3

export default function ContactPage() {
  //// [START: Form Values] ////
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  // const [isInErrorState, setIsInErrorState] = React.useState(false); // TODO: This should probably be implemented to handle errors, such as captcha not connected, or GetForm error to alert user that message was not dent

  const handleFormReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setWebsite('');
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
    isSubmitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg) => {
    setServerState({
      isSubmitting: false,
      status: { ok, msg },
    });
    if (ok) {
      handleFormReset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ ...serverState, isSubmitting: true });
    axios({
      method: 'post',
      url: `${process.env.GATSBY_GETFORM_ENDPOINT}`,
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  //// [END: GetForm Functions] ////

  return (
    <Layout>
      <GoogleReCaptchaProvider reCaptchaKey={`${process.env.GATSBY_GOOGLE_CAPTCHA_V3_SITEKEY}`}>
      <Container>
        <Row><h1>{contentData.title}</h1></Row> 
        <Row><hr /></Row>
        <Row>
          <Col className='col-12 col-md-8 col-lg-9 col-xl-10 mb-3'>
            {isSubmitted ?
              <ThankYou handleClearSubmitted={handleClearSubmitted} />
            :
              <ContactForm
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                company={company}
                setCompany={setCompany}
                website={website}
                setWebsite={setWebsite}
                subject={subject}
                setSubject={setSubject}
                message={message}
                setMessage={setMessage}
                handleOnSubmit={handleOnSubmit}
                isButtonDisabled={serverState.isSubmitting}
              />
            }
          </Col>
          <Col className='col-5 col-md-4 col-lg-3 col-xl-2 mb-3 pt-3 pt-md-0'>
            <ReturnAddress />
          </Col>
        </Row>
      </Container>
      </GoogleReCaptchaProvider>
    </Layout>
  )
};

export const Head = () => (
  <Seo title={contentData.title} />
);
