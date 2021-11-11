import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

export default function Layout ({ children }) {
  return (
    <div style={{ backgroundColor: "#121212", color: "rgba(255, 255, 255, 0.87)" }} >
      <Container>
        <Header/>
        <br/>
        <br/>
        <br/>
        <br/>
        {children}
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </Container>
    </div>
  )
}
