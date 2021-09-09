import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import 'scss/Header.scss';

import Image from 'components/Image';

import logo from 'images/logo.svg';

const Header = props => {
  const activePath = props.location.pathname;
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const renderNavigation = () => {
    return (
      <div className='navigation'>
        <Link to='/' className={'navigationLink' + (activePath === '/' ? ' active' : '')}>About</Link>
        <Link to='/portfolio' className={'navigationLink' + (activePath === '/portfolio' ? ' active' : '')}>Portfolio</Link>
        <Link to='/music' className={'navigationLink' + (activePath === '/music' ? ' active' : '')}>Music</Link>
        <Link to='/hire' className={'navigationLink' + (activePath === '/hire' ? ' active' : '')}>Hire Me</Link>
      </div>
    );
  };

  return (
    <div className='header'>
      <div className='hamburgerMenuIcon' onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}>
        <svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path fill='currentColor' d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'/></svg>
      </div>
      <Link to='/' className='logoContainer'>
        <Image src={logo} alt='Jared Geilich' />
      </Link>
      {renderNavigation()}
      <div className={'hamburgerMenu' + (showHamburgerMenu ? ' open' : '')}>
        {renderNavigation()}
      </div>
    </div>
  );
};

export default withRouter(Header);
