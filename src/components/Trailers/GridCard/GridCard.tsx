import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { VideoCard } from './VideoCard/VideoCard';
import { getTrailersData } from '../api/services/getTrailersData';
import { cardData } from '../../../mocks/cardData';

const trailersData = getTrailersData(cardData);

export const GridCard = () => (
  <Container sx={{ maxWidth: 1200, flexGrow: 1 }}>
    <Grid container>
      {trailersData.map((card) => (
        <Grid container justifyContent="space-around" key={card['id']} xs={12} sm={6} md={4} lg={3}>
          <Grid item>
            <VideoCard
              filmName={card['original_title']}
              img={card['backdrop_path']}
              trailerKey={card['key']}
            />
          </Grid>
        </Grid>
      ))}
    </Grid>
  </Container>
);
