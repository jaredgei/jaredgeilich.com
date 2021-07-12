import React from 'react';
import 'scss/Header.scss';

import Image from 'components/Image';

import logo from 'images/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='logoContainer'>
        <Image src={logo} alt='Jared Geilich' />
      </div>
    </div>
  );
};

export default Header;
