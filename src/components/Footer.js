import React from 'react';
import { Link } from 'gatsby';
import { Container, Navbar, Nav } from 'react-bootstrap';
import contentData from '../assets/content/header-footer.json';
import GitHub from '../assets/images/techStackIcons/github-original-wordmark.svg';
import LinkedIn from '../assets/images/techStackIcons/linkedin-original.svg';
import Email from '../assets/images/techStackIcons/EmailLogoSymbol.svg';

//// TODO: 
// 1. privacy policy

export default function Footer() {
  return (
    <Navbar className='bg-primary border-top border-dark py-1' variant='dark'>
      <Container>
          <Navbar.Brand className='p-0'>
            <span className='text-light fs-6'>{`©${contentData.copyrightYear}`}{` - All Rights Reserved`}</span>
          </Navbar.Brand>
          <Nav as='ul'>
              <Nav.Item as='li' key={'FooterLink_'}>
                <Link
                  to={'/contact'}
                  className='nav-link'
                  activeClassName='active'
                >
                  <Email style={{ width: '30px', height: '30px'}} />
                </Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <a
                  href={contentData.socialMedia[1].url}
                  target='_blank'
                  rel='noreferrer'
                  className='nav-link'
                >
                  <GitHub style={{ width: '30px', height: '30px' }} />
                </a>
              </Nav.Item>
              <Nav.Item as='li'>
                <a
                  href={contentData.socialMedia[2].url}
                  target='_blank'
                  rel='noreferrer'
                  className='nav-link'
                >
                  <LinkedIn style={{ width: '30px', height: '30px'}} />
                </a>
              </Nav.Item>
          </Nav>
      </Container>
    </Navbar>
  )
};
