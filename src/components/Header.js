import React from 'react';
import { Link } from 'gatsby';
import { Nav, Container, Navbar } from 'react-bootstrap';
import Logo from '../assets/images/icon.png';
import contentData from '../assets/content/contact-info.json';

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
    <Navbar style={{  }} className="bg-dark border-bottom border-info" variant="dark" fixed="top" expand="md" >
      <Container>
        <Navbar.Brand href="#" >
          <img 
            alt="" 
            src={Logo} 
            width="30" 
            height="30" 
          />
          {contentData.displayName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive"  className="justify-content-end" >
          <Nav as="ul" >
            {links.map((link, i) => (
              <Nav.Item as="li" key={"Link_"+ i} >
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
