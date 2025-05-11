import React from 'react';
import 'scss/Portfolio.scss';

import Image from 'components/Image';

import cloudAnalytics from 'images/portfolio/cloud-analytics.png';
import mediocre from 'images/portfolio/mediocre.jpg';
import pilotHome1 from 'images/portfolio/pilot-home-1.png';
import pilotHome2 from 'images/portfolio/pilot-home-2.png';
import pilotHome3 from 'images/portfolio/pilot-home-3.png';
import pilotHome4 from 'images/portfolio/pilot-home-4.png';
import potlux1 from 'images/portfolio/potlux-1.jpg';
import potlux2 from 'images/portfolio/potlux-2.jpg';
import rpegio1 from 'images/portfolio/rpegio-1.png';
import synthesize from 'images/portfolio/synthesize.png';
import visualTools1 from 'images/portfolio/visual-tools-1.png';
import visualTools2 from 'images/portfolio/visual-tools-2.png';
import visualTools3 from 'images/portfolio/visual-tools-3.png';
import visualTools4 from 'images/portfolio/visual-tools-4.png';
import visualTools5 from 'images/portfolio/visual-tools-5.png';
import wellnessQuiz1 from 'images/portfolio/wellness-quiz-1.png';
import wellnessQuiz2 from 'images/portfolio/wellness-quiz-2.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Image src={pilotHome1} alt='pilot ai homepage' />
      <Image src={pilotHome2} alt='pilot ai homepage' />
      <Image src={pilotHome3} alt='pilot ai homepage' />
      <Image src={pilotHome4} alt='pilot ai homepage' />
      <Image src={cloudAnalytics} alt='cloud analytics dashboard' />
      <Image src={rpegio1} alt='rpegio video editor' />
      <Image src={visualTools1} alt='pilot data management system' />
      <Image src={visualTools2} alt='pilot data management system' />
      <Image src={visualTools3} alt='pilot data management system' />
      <Image src={visualTools4} alt='pilot data management system' />
      <Image src={visualTools5} alt='pilot data management system' />
      <Image src={synthesize} alt='synthesize.consulting' />
      <Image src={mediocre} alt='mediocre.business' />
      <Image src={potlux1} alt='potlux.org' />
      <Image src={potlux2} alt='mediocre.business' />
      <Image src={wellnessQuiz1} alt='grokker wellness quiz' />
      <Image src={wellnessQuiz2} alt='grokker wellness quiz' />
    </div>
  );
};

export default Portfolio;
