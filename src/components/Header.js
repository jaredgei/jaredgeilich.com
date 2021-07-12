import React from 'react';
import { Link } from 'react-router-dom';
import 'scss/Header.scss';

import Image from 'components/Image';

import logo from 'images/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logoContainer'>
        <Image src={logo} alt='Jared Geilich' />
      </Link>
    </div>
  );
};

export default Header;
