import React from 'react';
import 'scss/Hire.scss';

const Hire = () => {
  return (
    <div className='hire'>
      <div className='hireText'>
        <span>Thanks for your interest in my work! The best way to get in touch is to </span>
        <a href='mailto:jgeilich@gmail.com' target='_blank' rel='noopener noreferrer'>send me an email</a>
        <span> with a job description and salary range for the position you are looking to fill. You can also </span>
        <a href='https://docs.google.com/document/d/e/2PACX-1vQfYTW6mEOJx3Pk-B_Nv7MH8iB7CGZ2GdNvI6eX4NPnnpERuw9RUIzLSTMgsQhF2pdz-jkIFrimSREe/pub' target='_blank' rel='noopener noreferrer'>view my resume</a>
        <span>.</span>
      </div>
    </div>
  );
};

export default Hire;
