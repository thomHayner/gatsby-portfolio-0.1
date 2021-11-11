import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

export default function Layout ({ children }) {
  return (
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
  )
}
