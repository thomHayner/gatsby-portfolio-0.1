import React from 'react';
import { Link } from 'gatsby';
import { Container, Navbar, Nav } from 'react-bootstrap';
import contentData from '../assets/content/header-footer.json';
import PrivacyPolicy from './PrivacyPolicy';
import GitHub from '../assets/icons/github-original-wordmark.svg';
import LinkedIn from '../assets/icons/linkedin-original.svg';
import Email from '../assets/icons/EmailLogoSymbol.svg';

export default function Footer() {
  return (
    <Navbar className='bg-navy border-top border-dark py-1' variant='dark'>
      <Container>
          <Navbar.Brand className='d-inline-flex p-0 fs-6 text-lightest-slate'>
            <span className='me-2'>{`©${contentData.copyrightYear}`}{` - All Rights Reserved`}</span>
            <span classname='align-text-top'><PrivacyPolicy /></span>
          </Navbar.Brand>
          <Nav as='ul'>
              <Nav.Item as='li' key={'FooterLink_'}>
                <Link
                  to={'/contact'}
                  className='nav-link'
                  activeClassName='active'
                  aria-label='Contact Me'
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
                  aria-label='View my GitHub page'
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
                  aria-label='View my LinkedIn page'
                >
                  <LinkedIn style={{ width: '30px', height: '30px'}} />
                </a>
              </Nav.Item>
          </Nav>
      </Container>
    </Navbar>
  )
};
