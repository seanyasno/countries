import {CountryName} from '../country-name/country-name';

export type Country = {
    capital: string[];
    population: number;
    region: string;
    name: CountryName;
    flags: {
        png: string;
        svg: string;
    }
}
