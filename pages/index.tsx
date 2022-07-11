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
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
                      rel="stylesheet"/>
            </Head>

            <main className={styles.main}>
                <Box sx={{padding: '0px 30px'}}>
                    <Grid container spacing={10}>
                        {
                            isSuccess &&
                            countries.map((country, index) => (
                                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
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
