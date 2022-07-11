import type {NextPage} from 'next';
import Head from 'next/head';
import {fetchAllCountries} from '../src/requests';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {useQuery} from 'react-query';
import {useEffect} from 'react';
import {Box, Grid, Typography} from '@mui/material';
import {CountryCard} from '../src/components';

const Home: NextPage = () => {
    const {data: countries, isSuccess} = useQuery({
        queryKey: 'countries',
        queryFn: fetchAllCountries,
    });

    // useEffect(() => {
    //     console.log(countries);
    // }, [countries]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Countries</title>
                <meta name="description" content="Search for basic information about countries."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Box sx={{padding: '0px 30px'}}>
                    <Grid container spacing={8}>
                        {
                            isSuccess &&
                            countries.map((country, index) => (
                                <Grid key={index} item xs={3}>
                                    <CountryCard country={country}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </main>

            {/*<footer className={styles.footer}>*/}
            {/*  <a*/}
            {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Powered by{' '}*/}
            {/*    <span className={styles.logo}>*/}
            {/*      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
            {/*    </span>*/}
            {/*  </a>*/}
            {/*</footer>*/}
        </div>
    );
};

export default Home;
