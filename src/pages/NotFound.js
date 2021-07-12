import React from 'react';
import 'scss/NotFound.scss';

import Button from 'components/Button';

const NotFound = () => {
  return (
    <div className='notFound'>
      <div className='notFoundTitle'>Page Not Found</div>
      <Button text='Go Home' uri='/' size='large' />
    </div>
  );
};

export default NotFound;
