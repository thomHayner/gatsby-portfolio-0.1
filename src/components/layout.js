import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout ({ children }) {
  // img tag just pings heroku app to start the free tier dyno.  Since heroku app is linked to this
  // domain, it is giving me a CORS error.  I might make a third app that acts as a middleware.
  // Have image make call to third site, have third site ping heroku app so that it starts the dyno.
  // Another option is to install the npm ping package or to look for a gatsby package.
  return (
    <div className="bg-primary text-light min-vh-100" style={{ paddingTop: 71 }}>
      {/* <img src="https://th-battleship-js-demo.herokuapp.com/" alt="nada" style={{ margin: "-5000px" }} /> */}
      <Header />
      {children}
      <Footer />
    </div>
  )
};
