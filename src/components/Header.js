import React from 'react';
import { Link } from 'gatsby';
import { Nav, Container, Navbar } from 'react-bootstrap';
import Logo from '../assets/images/icon.png';
import contentData from '../assets/content/header-footer.json';

// This is just a data object for generating Nav Links dynamically
const links = [
  {
    text: 'Portfolio',
    to: '/',
  },
  {
    text: 'Blog',
    to: '/blog',
  },
  {
    text: 'Contact',
    to: '/contact',
  },
]

export default function Header() {
  return (
    <Navbar className='bg-primary border-bottom border-dark py-1' variant='dark' fixed='top' expand='md'>
      <Container>
        <Navbar.Brand href='/'>
          <img
            alt="Thomas Hayner's Business Logo"
            src={Logo}
            width='30'
            height='30'
          />
          <span className='text-lightest-slate ms-1 h-100 align-middle'>{contentData.displayName}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarResponsive' />
        <Navbar.Collapse id='navbarResponsive'  className='justify-content-end'>
          <Nav as='ul'>
            {links.map((link, i) => (
              <Nav.Item as='li' key={'LinkH_'+ i}>
                <Link
                  to={link.to}
                  className='nav-link'
                  activeClassName='active'
                >
                  {link.text}
                </Link>
              </Nav.Item>))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};
