import React, {PropsWithChildren} from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';

export const Navbar: React.FC<PropsWithChildren> = (props) => {
    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography sx={{flexGrow: 1}}>Where in the world?</Typography>
                    <Button color="inherit">Dark Mode</Button>
                </Toolbar>
            </AppBar>
            {props.children}
        </>
    );
};
