import { Box, Grid, Container } from '@mui/material';
import React from 'react';

export const Footer = () => {
    return (
        <footer>
            <Box>
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                HELP
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}