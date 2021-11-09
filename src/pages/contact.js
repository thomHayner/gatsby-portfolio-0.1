import React from "react";
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Layout from "../components/layout";

// https://material.io/design/color/dark-theme.html#properties
// Background #121212
// Dark Primary #1F1B24

// styles
const pageStyles = {
  color: "#ffffff",
  backgroundColor: "#121212",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  width: "60%",
  maxWidth: "1280px",
  margin: "auto",
  padding: "10px",
}
const pageTitleHero = {
  // padding: "10px",
}
const formAndAddressContainer = {
  width: "100%",
  // padding: "10px"
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignContent: "space-between"
}
const form = {
  // height: "100%",
  width: "85%",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
}
const formRow= {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
}
const contactSubmitButton = {
  
}
const addressArea = {
  minWidth: "70px",
}

function ContactPage() {
  return (
    <Layout>
    <div className="contact-page" style={pageStyles}>
      <Container>

      </Container>
            <div className="page-title-hero" style={pageTitleHero}>
              Contact Page Placeholder
            </div>
            <div className="form-and-address-container" style={formAndAddressContainer}>
              {/* <div className="form" style={form}>
                <div className="form-row" style={formRow}>
                  <label for="name">Name</label>
                  <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    placeholder="Your name..."
                    value="" 
                    ></input>
                </div>
                <div className="form-row" style={formRow}>
                  <label for="email" >Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="Your email address..."
                    value="" 
                    ></input>
                </div>
                <div className="form-row" style={formRow}>
                  <label for="subject">Subject</label>
                  <input 
                    id="subject" 
                    type="text" 
                    name="text" 
                    placeholder="Your reason for contacting us..."
                    value="" 
                    ></input>
                </div>
                <div className="form-row" style={formRow}>
                  <label for="message">Your Message</label>
                  <input 
                    id="message" 
                    type="text" 
                    name="message" 
                    placeholder="What would you like to tell us?"
                    value="" 
                    ></input> 
                </div>
                <div className="form-row" style={formRow}>
                  <input 
                    id="contactSubmitButton" 
                    type="button" 
                    name="contactSubmitButton" 
                    style={contactSubmitButton} 
                    value="Submit" 
                    onClick={()=>{}}/>
                </div>
              </div> */}
              <Form>
                <Form.Group className="" controlId="">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter your name..."/>
                </Form.Group>
                <Form.Group className="" controlId="">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email address..."/>
                </Form.Group>
                <Form.Group className="" controlId="">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="name" placeholder="What is this about..."/>
                </Form.Group>
                <Form.Group className="" controlId="">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="What would you like to tell us..."/>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <div className="address-area" style={addressArea}>
                <h3>Contact Us</h3>
                <address>
                    1023 Walnut St<br/>
                    Boulder, CO<br/>
                    80302<br/>
                </address>
              </div>
            </div>
    </div>
    </Layout>
  )
}

export default ContactPage;
