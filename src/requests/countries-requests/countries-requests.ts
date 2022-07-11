import {restCountriesClient} from '../../utils';
import {Country} from '../../abstraction/types';

export const fetchAllCountries = async (): Promise<Country[]> => {
    try {
        const response = await restCountriesClient.get<Country[]>('/all?fields=name,capital,population,region,flags');
        return response.data;
    } catch (error) {
        throw error;
    }
}
