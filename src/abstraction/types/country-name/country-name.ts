export type CountryName = {
    official: string;
    common: string;
    nativeName: {
        [language: string]: Omit<CountryName, 'nativeName'>;
    }
}
