import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout ({ children }) {
  return (
    <div style={{ backgroundColor: "rgba(18,18,18, .97)", backgroundSize: "cover", color: "rgba(255, 255, 255, 0.87)", minHeight: "100vh" }} >
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
