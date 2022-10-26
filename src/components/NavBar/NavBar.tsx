import React from 'react';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
    return (
        <AppBar position='fixed'>
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label='menu' >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' sx={{flexGrow: 1}}>
                        Watch list
                    </Typography>
                    <Box mr={3}>
                        <Button color='inherit' variant="outlined">
                            LOGIN
                        </Button>
                    </Box>
                    <Button color='secondary' variant='contained'>
                        SIGNUP
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}