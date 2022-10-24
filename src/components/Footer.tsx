import { Box, Grid, Container, Link } from '@mui/material';
import React from 'react';

export const Footer = () => {
    return (
        <footer>
            <Box
                px={{ sm: 4 }}
                py={{ sm: 4 }}
                bgcolor='primary.light'
                color='white'
            >
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                HELP
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'>
                                    CONTACT
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'>
                                    CONTACT
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'>
                                    CONTACT
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                HELP
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'>
                                    CONTACT
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'>
                                    CONTACT
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'>
                                    CONTACT
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                HELP
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'>
                                    CONTACT
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'>
                                    CONTACT
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'>
                                    CONTACT
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}