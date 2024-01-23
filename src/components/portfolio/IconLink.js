import React from 'react';
import PropTypes from 'prop-types';

function IconLink(props) {
  const { link, title, icon } = props;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className={icon} />
      {' '}
      {title}
    </a>
  );
}

IconLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconLink;
