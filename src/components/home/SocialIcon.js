import React from 'react';
import PropTypes from 'prop-types';

function SocialIcon(props) {
  const { link, icon, label } = props;
  return (
    <a
      target="_blank"
      aria-label={label}
      rel="noopener noreferrer"
      href={link}
    >
      <i className={icon} aria-hidden="true" />
    </a>
  );
}

SocialIcon.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SocialIcon;
