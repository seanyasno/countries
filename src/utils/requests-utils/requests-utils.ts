import axios from 'axios';

export const restCountriesClient = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});
