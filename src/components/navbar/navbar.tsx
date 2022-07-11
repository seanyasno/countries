import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import React, {PropsWithChildren} from 'react';

export const Navbar: React.FC<PropsWithChildren> = (props) => {
    return (
        <>
            <AppBar position="sticky" sx={{backgroundColor: 'white', padding: '0 40px'}} elevation={3}>
                <Toolbar>
                    <Typography variant='h6' fontWeight='bolder' color='black' sx={{flexGrow: 1}}>Where in the world?</Typography>
                    {/*<Button color="primary">Dark Mode</Button>*/}
                </Toolbar>
            </AppBar>
            {props.children}
        </>
    );
};
