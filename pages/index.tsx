import type {NextPage} from 'next';
import Head from 'next/head';
import {fetchAllCountries} from '../src/requests';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {useQuery} from 'react-query';
import {useEffect, useMemo, useState} from 'react';
import {Box, Grid, Input, InputBase, Typography} from '@mui/material';
import {CountryCard} from '../src/components';

const Home: NextPage = () => {
    const {data: countries, isSuccess} = useQuery({
        queryKey: 'countries',
        queryFn: fetchAllCountries,
    });

    const [input, setInput] = useState<string>();

    const filteredCountries = useMemo(() => countries?.filter(country => country.name.common.includes(input ?? '')), [countries, input]);

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
                    <InputBase
                        placeholder='Search for a country...'
                        onChange={event => setInput(event.target.value)}
                        sx={theme => ({
                            margin: '0 0 50px 0',
                            maxWidth: '400px',
                            '& .MuiInputBase-input': {
                                borderRadius: 2,
                                position: 'relative',
                                backgroundColor: theme.palette.mode === 'light' ? 'hsl(0, 0%, 100%)' : '#2b2b2b',
                                border: '0px none #ced4da',
                                fontSize: 14,
                                padding: '16px 24px',
                                transition: theme.transitions.create([
                                    'border-color',
                                    'background-color',
                                    'box-shadow',
                                ]),
                                boxShadow: theme.shadows[3]
                            },
                        })}
                    />
                    <Grid container spacing={10}>
                        {
                            isSuccess &&
                            filteredCountries?.map((country, index) => (
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
