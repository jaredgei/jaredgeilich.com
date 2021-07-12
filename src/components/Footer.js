import React from 'react';
import 'scss/Footer.scss';

import { email, facebook, github, linkedin } from 'images/icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='copyright'>&copy;{new Date().getFullYear()} Jared Geilich</div>
      <div className='socials'>
        <a className='li' href='https://www.linkedin.com/in/jgeilich/' target='_blank' rel='noopener noreferrer'>{linkedin}</a>
        <a className='gh' href='https://github.com/jaredgei' target='_blank' rel='noopener noreferrer'>{github}</a>
        <a className='fb' href='https://www.facebook.com/jaredgei' target='_blank' rel='noopener noreferrer'>{facebook}</a>
        <a className='em' href='mailto:jgeilich@gmail.com' target='_blank' rel='noopener noreferrer'>{email}</a>
      </div>
    </div>
  );
};

export default Footer;
