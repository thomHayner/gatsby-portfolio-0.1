import React from 'react';
import { Link } from 'gatsby';
import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import contentData from '../assets/content/contact-info.json';
import GitHub from '../assets/images/techStackIcons/github-original-wordmark.svg';
import LinkedIn from '../assets/images/techStackIcons/linkedin-original.svg';
import Email from '../assets/images/techStackIcons/EmailLogoSymbol.svg';

// need to make this: 
// sticky
// max height
// some sort of content in the center (or move social media buttons to center and add new content to right side)

export default function Footer() {
  return (
    <Navbar style={{  }} className="bg-primary border-top border-dark " variant="dark" fixed="bottom" >
      <Container style={{  }} >
          <Navbar.Brand>
            <Row><h5>{`©${contentData.copyrightYear} ${contentData.displayName}`}</h5></Row>
            <Row><h6>{`All Rights Reserved`}</h6></Row>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" style={{  }} >
            <Nav as="ul" >
                <Nav.Item as="li" key={"FooterLink_"} >
                  <Link 
                    to={'/contact'} 
                    className="nav-link" 
                    activeClassName="active" 
                    style={{ width: "55px", height: "55px"}} 
                  >
                    <Email />
                  </Link>
                </Nav.Item>
                <Nav.Item as="li" >
                  <Link 
                    to={contentData.socialMedia[1].url} 
                    className="nav-link" 
                    activeClassName="active" 
                    style={{ width: "55px", height: "55px" }} 
                  >
                    <GitHub />
                  </Link>
                </Nav.Item>
                <Nav.Item as="li" >
                  <Link 
                    to={contentData.socialMedia[2].url} 
                    className="nav-link" 
                    activeClassName="active" 
                    style={{ width: "55px", height: "55px"}} 
                  >
                    <LinkedIn />
                  </Link>
                </Nav.Item>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
