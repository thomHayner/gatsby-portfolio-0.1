import React from 'react';
import { Link } from 'gatsby';
import { Container, Navbar, Nav } from 'react-bootstrap';
import contentData from '../assets/content/contact-info.json';
import GitHub from '../assets/images/techStackIcons/github-original-wordmark.svg';
import LinkedIn from '../assets/images/techStackIcons/linkedin-original.svg';
import Email from '../assets/images/techStackIcons/EmailLogoSymbol.svg';

export default function Footer() {
  return (
    <Navbar style={{ backgroundColor: "#181818" }} className="bg-dark border-top border-info" variant="dark" >
      <Container style={{  }}>
          <Navbar.Brand>
            {`©${contentData.displayName}`}
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
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
