import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'scss/Button.scss';

const propTypes = {
  text: PropTypes.string.isRequired,
  uri: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

const defaultProps = {
  size: 'small'
};

const Button = props => {
  const classes = 'button' + (props.size === 'small' ? ' small' : '') + (props.disabled ? ' disabled' : '');

  if (props.uri) {
    return (
      <Link to={props.uri} className={classes}>
        <div className='buttonText'>{props.text}</div>
      </Link>
    );
  }

  return (
    <div onClick={props.onClick} className={classes}>
      <div className='buttonText'>{props.text}</div>
    </div>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
