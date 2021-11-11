import React from 'react';
import { Link } from 'gatsby';
import { Nav, Container, Navbar } from 'react-bootstrap';
import Logo from '../images/icon.svg';

// This is just a data object for generating Nav Links dynamically
const links = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Blog",
    to: "/blog",
  },
  {
    text: "Portfolio",
    to: "/portfolio",
  },
  {
    text: "Contact",
    to: "/contact",
  },
]

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#">
          <img 
            alt="" 
            src={Logo} 
            width="30" 
            height="30" 
          />
          {``}
          Thomas Hayner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive"  className="justify-content-end" >
          <Nav as="ul" >
            {links.map((link, i) => (
              <Nav.Item as="li" key={i}>
                <Link 
                  to={link.to} 
                  className="nav-link" 
                  activeClassName="active" 
                >
                  {link.text}
                </Link>
              </Nav.Item>))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
