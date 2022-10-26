import React from 'react';
import { Box, Typography } from '@mui/material';
import { GridCard } from './GridCard/GridCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Trailers = () => {
  const banner = useSelector<RootState, string>(
    (state) => state.trailerReducer.banner
  );

  const styles = {
    mx: 'auto',
    mt: 10,
    mb: 10,
    maxWidth: 'lg',
    flexGrow: 1,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <Box sx={styles}>
      <Typography variant="h3" color="white" mb={2} sx={{ px: 2 }}>
        Trailers
      </Typography>
      <GridCard />
    </Box>
  );
};
