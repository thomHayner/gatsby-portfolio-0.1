import React from 'react';
import { Link } from 'gatsby';
import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import contentData from '../assets/content/header-footer.json';
import GitHub from '../assets/images/techStackIcons/github-original-wordmark.svg';
import LinkedIn from '../assets/images/techStackIcons/linkedin-original.svg';
import Email from '../assets/images/techStackIcons/EmailLogoSymbol.svg';

// need to make this: 
// sticky
// max height
// some sort of content in the center (or move social media buttons to center and add new content to right side)
// privacy policy

export default function Footer() {
  return (
    <Navbar className='bg-primary border-top border-dark py-1' variant='dark'>
      <Container>
          <Navbar.Brand className='p-0'>
            <p className='text-light fs-6'>{`©${contentData.copyrightYear}`}{` - All Rights Reserved`}</p>
          </Navbar.Brand>
          {/* <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end' style={{  }}> */}
            <Nav as='ul' className='p-0'>
                <Nav.Item as='li' key={'FooterLink_'}>
                  <Link
                    to={'/contact'}
                    className='nav-link mx-2 p-0'
                    activeClassName='active'
                    style={{ width: '30px', height: '30px'}}
                  >
                    <Email />
                  </Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <a 
                    href={contentData.socialMedia[1].url}
                    target='_blank'
                    rel='noreferrer'
                    className='nav-link mx-2 p-0'
                    style={{ width: '30px', height: '30px' }}
                  >
                    <GitHub className='' />
                  </a>
                </Nav.Item>
                <Nav.Item as='li'>
                  <a 
                    href={contentData.socialMedia[2].url}
                    target='_blank'
                    rel='noreferrer'
                    className='nav-link mx-2 p-0'
                    style={{ width: '30px', height: '30px'}}
                  >
                    <LinkedIn />
                  </a>
                </Nav.Item>
            </Nav>
          {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}
