import React, { useState } from 'react';
import 'scss/Home.scss';

import Image from 'components/Image';

import { githubSquare, linkedinSquare, facebookSquare, emailSquare } from 'images/icons';
import heroBokeh from 'images/hero/bokeh.png';
import heroCity from 'images/hero/city.svg';
import heroForeground from 'images/hero/foreground.svg';
import heroMoon from 'images/hero/moon.svg';
import heroStars from 'images/hero/stars.png';
import portrait from 'images/portrait.jpg';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = event => {
    setMousePosition({
      x: event.clientX - event.target.clientWidth / 2,
      y: event.clientY - event.target.clientHeight / 2
    });
  };

  const getAge = () => {
    const birthday = new Date(1993, 4, 29, 0, 0, 0, 0);
    return Math.floor((Date.now() - birthday.getTime()) / (24 * 60 * 60 * 365.25 * 1000)); // may be slightly off due to leap year approximation but close enough
  };

  const renderHeroImage = (image, parallaxScale) => {
    return (
      <div className='heroImageContainer' style={{ top: `${mousePosition.y / parallaxScale}px`, left: `${mousePosition.x / parallaxScale}px` }}>
        <Image src={image} alt='hero image' />
      </div>
    );
  };

  return (
    <div className='home'>
      <div className='hero' onMouseMove={onMouseMove}>
        {renderHeroImage(heroStars, 24)}
        {renderHeroImage(heroMoon, 48)}
        {renderHeroImage(heroCity, 72)}
        <div className='heroTextContainer'>
          <div className='heroTextTitle'>Jared Geilich</div>
          <div className='heroTextSubtitle'>DEVELOPER // DESIGNER // MUSICIAN</div>
        </div>
        {renderHeroImage(heroForeground, -48)}
        {renderHeroImage(heroBokeh, -24)}
      </div>
      <div className='about section'>
        <div className='flexContainer'>
          <div className='flexImage'><Image src={portrait} alt='portrait' /></div>
          <div className='flexText'>
            <div className='highlight'>Hello.</div>
            <div className='text'>Thanks for visiting my website. I am a {getAge()} year old developer, designer, and musician, currently working as a senior software engineer at <a href='https://pilot.ai' target='_blank' rel='noopener noreferrer'>pilot.ai</a>.</div>
            <div className='text'>I work primarily in the Node.js ecosystem, and also use React.js for front-end development, and React Native for mobile development.</div>
            <div className='text'>My work also includes UX and creative design, using software like Sketch, Photoshop, Procreate, and more.</div>
            <div className='text'>Finally, I have experience with music composition and production, as well as film production and editing.</div>
          </div>
        </div>
      </div>
      <div className='contact section'>
        <div className='stars1' />
        <div className='stars2' />
        <div className='stars3' />
        <div className='sectionHeader'>Connect<span className='hideSmall'> With Me</span></div>
        <div className='socials'>
          <a className='social' href='https://www.linkedin.com/in/jgeilich/' target='_blank' rel='noopener noreferrer'>{linkedinSquare}</a>
          <a className='social' href='https://github.com/jaredgei' target='_blank' rel='noopener noreferrer'>{githubSquare}</a>
          <a className='social' href='https://www.facebook.com/jaredgei' target='_blank' rel='noopener noreferrer'>{facebookSquare}</a>
          <a className='social' href='mailto:jgeilich@gmail.com' target='_blank' rel='noopener noreferrer'>{emailSquare}</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
