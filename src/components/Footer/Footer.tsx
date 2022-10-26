import { Box, Grid, Container, Link, Typography } from '@mui/material';
import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <Box px={{ sm: 3 }} py={{ sm: 3 }} bgcolor="primary.light" color="white">
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ px: 4 }}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography variant="h6">HELP</Typography>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  <Typography>Contact</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  <Typography>Contact</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  <Typography>Contact</Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography variant="h6">HELP</Typography>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  <Typography>Contact</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  <Typography>Contact</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  <Typography>Contact</Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography variant="h6">HELP</Typography>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  <Typography>Contact</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  <Typography>Contact</Typography>
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  <Typography>Contact</Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};
