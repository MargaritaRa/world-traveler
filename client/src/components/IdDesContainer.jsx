import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryInfo from './CountryInfo';
import CountryList from './CountryList';

function IdDesContainer() {

    const { id } = useParams();
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    

    useEffect(() => {
        fetch('/api/destinations')
            .then((resp) => resp.json())
            .then((data) => {
                // console.log('Fetched destinations:', data);
                const filteredCountries = data.filter(country => country.continent.toLowerCase() === id.toLowerCase());
                // console.log('Filtered countries for continent', id, ':', filteredCountries);
                setCountries(filteredCountries);
            })
            .catch((error) => console.error('Error fetching destinations:', error));
    }, [id]);

    const handleCountrySelect = (countryId) => {
        // console.log('Selected country ID:', countryId);
        fetch(`/api/destinations/${countryId}`)
            .then((resp) => resp.json())
            .then((data) => {
                // console.log('Fetched country data:', data); 
                setSelectedCountry(data);
            })
            .catch((error) => console.error('Error fetching country:', error));
    };

    return (
        <div className="idDesCon">
            <CountryList countries={countries} onClick={handleCountrySelect} />
            <div className="main-country">
                {selectedCountry ? (
                    <CountryInfo countries={countries} country={selectedCountry} />
                ) : (
                    <p>Please select a country to see the details</p>
                )}
            </div>
        </div>
    );
}

export default IdDesContainer;

