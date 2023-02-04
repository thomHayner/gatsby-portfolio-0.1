import React from 'react';
import useResizableWindow from '../utilities/useResizableWindow';
import Header from './Header';
import Footer from './Footer';

// img tag just pings heroku app to start the free tier dyno.  Since heroku app is linked to this
// domain, it is giving me a CORS error.  I might make a third app that acts as a middleware.
// Have image make call to third site, have third site ping heroku app so that it starts the dyno.
// Another option is to install the npm ping package or to look for a gatsby package.

export default function Layout ({ children }) {
  const dimensions = useResizableWindow();
  const viewHeight = dimensions.height - 55 - 55;

  return (
    <div className="bg-primary text-light min-vh-100" style={{ paddingTop: 55 }}>
      {/* <img src="https://th-battleship-js-demo.herokuapp.com/" alt="nada" style={{ margin: "-5000px" }} /> */}
      <Header />
      <div style={{ minHeight: viewHeight }}>
        {children}
      </div>
      <Footer />
    </div>
  )
};
