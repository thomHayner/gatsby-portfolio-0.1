import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout ({ children }) {
  return (
    <div className="bg-dark text-light min-vh-100 " >
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
    </div>
  )
}
