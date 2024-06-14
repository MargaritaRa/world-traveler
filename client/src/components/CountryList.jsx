import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';

function CountryList({ continent, countries, onClick }) {
    
    const primary = red[900];

    const handleCountryClick = (country) => {
        onClick(country.id);
    };

    return (
        <div className="country-list">
            <h2 className='country-list-h2'>All destinations in {continent}</h2>
            <Stack direction="row" spacing={3}>
                {Array.isArray(countries) && countries.map((country) => (
                    <div key={country.id}>
                        <Button 
                            size='small'
                            variant='text' 
                            sx={{ fontFamily: "Poppin", color: primary}}
                            onClick={() => handleCountryClick(country)}>
                            {country.name}
                        </Button>
                    </div>
                ))}
            </Stack>
        </div>
    );
}

export default CountryList;

