import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  alt: PropTypes.string.isRequired
  // any other <img /> props accepted
};

const Image = props => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img {...props}
      alt={props.alt} // redundant but need to specify this so react doesnt whine
      style={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      onLoad={() => setIsLoaded(true)} />
  );
};

Image.propTypes = propTypes;
export default Image;
