import React from 'react';
import { Box, Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import PortfolioBlock from './PortfolioBlock';
import { info } from '../../info/Info';

export default function Portfolio() {
  return (
    <Box>
      <Grid container display="flex" justifyContent="center">
        {info.portfolio.map((project) => (
          <Grid item xs={12} md={6} key={uuidv4()}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
