import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import IconLink from './IconLink';

function PortfolioBlock(props) {
  const {
    image, live, source, title,
  } = props;
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box component="img" src={image} alt="mockup" />
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className="portfolio"
        display="flex"
        flexDirection="column"
        gap="0.5rem"
        alignItems="center"
        fontSize="1.5rem"
        py="2rem"
      >
        <Box p={1} border="2px solid black" borderRadius="25px">
          <IconLink link={live} title="Live Demo" icon="fa fa-safari" />
        </Box>
        <Box p={1} border="2px solid black" borderRadius="25px">
          <IconLink link={source} title="Source Code" icon="fa fa-code" />
        </Box>
      </Box>
    </Box>
  );
}

PortfolioBlock.propTypes = {
  image: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PortfolioBlock;
