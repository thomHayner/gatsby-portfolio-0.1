import React from 'react';

import { Container, Navbar } from 'react-bootstrap';
import Logo from '../images/icon.png';

const footer={
  alignSelf: "end"
}

export default function Footer() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark" >
      <Container style={footer}>
        <Navbar.Brand href="#home">
          <img 
            alt=""
            src={Logo}
            width="30"
            height="30"
          />
          {``}
          Thomas Hayner
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}