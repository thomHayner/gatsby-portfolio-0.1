import * as React from 'react';
import PrivacyIcon from '../assets/icons/shield-check.svg';

export default function PrivacyPolicy() {
  return (
    <a
      href='https://www.freeprivacypolicy.com/live/4f116e35-bbbe-47ca-927c-0dcd3495881a'
      target='_blank'
      rel='noreferrer'
      className='nav-link'
      aria-label='Privacy Policy'
    >
      <PrivacyIcon />
    </a>
  )
};
