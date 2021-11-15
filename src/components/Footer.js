import React from 'react';
import { Link } from 'gatsby';
import { Container, Navbar } from 'react-bootstrap';
import Logo from '../assets/images/icon.png';
import contentData from '../assets/content/contact-info.json';

const footer={
  alignSelf: "end"
}

export default function Footer() {
  return (
    <Navbar style={{ backgroundColor: "#181818" }} className="bg-dark border-top border-info" variant="dark" fixed="bottom" >
      <Container style={footer}>
        <Navbar.Brand href="#home">
          <h5>{`©${contentData.displayName}`}</h5>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}