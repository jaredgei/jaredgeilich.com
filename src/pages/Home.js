import React from 'react';
import 'scss/Home.scss';

import useMousePosition from 'hooks/useMousePosition';
import useScrollPosition from 'hooks/useScrollPosition';

import Image from 'components/Image';

import { githubSquare, linkedinSquare, facebookSquare, emailSquare } from 'images/icons';
import heroBokeh from 'images/hero/bokeh.png';
import heroCity from 'images/hero/city.svg';
import heroForeground from 'images/hero/foreground.svg';
import heroMoon from 'images/hero/moon.svg';
import heroStars from 'images/hero/stars.png';
import portrait from 'images/portrait.jpg';

const Home = () => {
  const mousePosition = useMousePosition();
  const scrollPosition = useScrollPosition();

  const getAge = () => {
    const birthday = new Date(1993, 4, 29, 0, 0, 0, 0);
    return Math.floor((Date.now() - birthday.getTime()) / (24 * 60 * 60 * 365.25 * 1000)); // may be slightly off due to leap year approximation but close enough
  };

  const renderHeroImage = (image, parallaxScale, scrollScale) => {
    return (
      <div className='heroImageContainer' style={{ top: `${(mousePosition.y / parallaxScale) + (scrollScale ? (scrollPosition / scrollScale) : 0)}px`, left: `${mousePosition.x / parallaxScale}px` }}>
        <Image src={image} alt='hero image' />
      </div>
    );
  };

  return (
    <div className='home'>
      <div className='hero'>
        {renderHeroImage(heroStars, 24)}
        {renderHeroImage(heroMoon, 48, 1)}
        {renderHeroImage(heroCity, 72, 2)}
        <div className='heroTextContainer' style={{ top: `${scrollPosition / 4}px` }}>
          <div className='heroTextTitle'>Jared Geilich</div>
          <div className='heroTextSubtitle'>DEVELOPER // DESIGNER // MUSICIAN</div>
        </div>
        {renderHeroImage(heroForeground, -48, 6)}
        {renderHeroImage(heroBokeh, -24, 8)}
      </div>
      <div className='about section'>
        <div className='flexContainer'>
          <div className='flexImage'><Image src={portrait} alt='portrait' /></div>
          <div className='flexText'>
            <div className='highlight'>Hello.</div>
            <div className='text'>Thanks for visiting my website. I am a {getAge()} year old developer, designer, and musician, currently based in Boston, MA.</div>
            <div className='text'>I am passionate about user experience and building beautiful products, and have worked across the full stack of application development.</div>
            <div className='text'>I work primarily in the node.js ecosystem, and have experience with UX and creative design using software like Sketch, Photoshop, Procreate, and more.</div>
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
