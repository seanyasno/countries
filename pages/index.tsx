import {Box, FormControl, Grid, InputBase, InputLabel, MenuItem, Select} from '@mui/material';
import {fetchAllCountries, fetchCountriesByRegion} from '../src/requests';
import styles from '../styles/Home.module.css';
import {CountryCard} from '../src/components';
import {useMemo, useState} from 'react';
import {useQuery} from 'react-query';
import type {NextPage} from 'next';
import Head from 'next/head';
import _ from 'lodash';

const Home: NextPage = () => {
    const {data: countries, isSuccess} = useQuery({
        queryKey: 'countries',
        queryFn: fetchAllCountries,
        refetchOnWindowFocus: false,
    });

    const [input, setInput] = useState<string>();
    const [selectedRegion, setSelectedRegion] = useState<string>('');

    const {data: regionFilteredCountries} = useQuery({
        queryKey: selectedRegion,
        queryFn: () => fetchCountriesByRegion(selectedRegion),
        enabled: !_.isEmpty(selectedRegion),
        refetchOnWindowFocus: false,
    });

    const filteredCountries = useMemo(() => {
        if (selectedRegion && regionFilteredCountries) {
            return regionFilteredCountries;
        }

        return countries?.filter(country => country.name.common.includes(input ?? ''))
    }, [countries, input, selectedRegion, regionFilteredCountries]);

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
                {
                    isSuccess &&
                    <Box sx={{padding: '0px 30px'}}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <InputBase
                                    placeholder="Search for a country..."
                                    onChange={event => setInput(event.target.value)}
                                    sx={theme => ({
                                        margin: '0 0 50px 0',
                                        flexGrow: 1,
                                        '& .MuiInputBase-input': {
                                            borderRadius: 2,
                                            position: 'relative',
                                            backgroundColor: theme.palette.mode === 'light' ? 'hsl(0, 0%, 100%)' : '#2b2b2b',
                                            border: '0px none #ced4da',
                                            fontSize: 14,
                                            width: '400px',
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
                            </Grid>
                            <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'end'}}>
                                <FormControl sx={{width: '200px'}}>
                                    <InputLabel id="region-select-label">Region</InputLabel>
                                    <Select
                                        labelId="region-select-label"
                                        id="region-select"
                                        value={selectedRegion}
                                        label="Region"
                                        onChange={event => setSelectedRegion(event.target.value)}
                                    >
                                        <MenuItem value=''>None</MenuItem>
                                        <MenuItem value="Africa">Africa</MenuItem>
                                        <MenuItem value="America">America</MenuItem>
                                        <MenuItem value="Asia">Asia</MenuItem>
                                        <MenuItem value="Europe">Europe</MenuItem>
                                        <MenuItem value="Oceania">Oceania</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={10}>
                            {
                                filteredCountries?.map((country, index) => (
                                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                        <CountryCard country={country}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>
                }
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
