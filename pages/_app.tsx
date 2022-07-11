import {QueryClientProvider, QueryClient} from 'react-query';
import {Navbar} from '../src/components';
import type {AppProps} from 'next/app';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <Navbar>
                <Component {...pageProps} />
            </Navbar>
        </QueryClientProvider>
    );
}

export default MyApp;
