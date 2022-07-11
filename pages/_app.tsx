import {QueryClientProvider, QueryClient} from 'react-query';
import {createTheme, ThemeProvider} from '@mui/material';
import {Navbar} from '../src/components';
import type {AppProps} from 'next/app';
import '../styles/globals.css';

const theme = createTheme({
    typography: {
        fontFamily: 'Nunito Sans, sans-serif'
    },
});

function MyApp({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <ThemeProvider theme={theme}>
                <Navbar>
                    <Component {...pageProps} />
                </Navbar>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
