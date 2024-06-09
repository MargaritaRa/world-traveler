import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryInfo from './CountryInfo';
import CountryList from './CountryList';

function IdDesContainer() {

    const { id } = useParams();
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [favorites, setFavorites] = useState([]);

    

    useEffect(() => {
        fetch('/api/destinations')
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then((data) => {
                const filteredCountries = data.filter(country => country.continent.toLowerCase() === id.toLowerCase());
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
    }

    const handleAddToFavorites = (countryId) => {
        fetch('/api/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            },
            body: JSON.stringify({ country_id: countryId }),
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Failed to add to favorites');
        })
        .then((data) => {
            setFavorites([...favorites, data]);
        })
        .catch((error) => {
            console.error('Error adding to favorites:', error);
        });
    }

    return (
        <div className="idDesCon">
            <CountryList countries={countries} onClick={handleCountrySelect} />
            <div className="main-country">
                {selectedCountry ? (
                    <CountryInfo countries={countries} country={selectedCountry} favorites={favorites} handleAddToFavorites={handleAddToFavorites} />
                ) : (
                    <p>Please select a country to see the details</p>
                )}
            </div>
        </div>
    );
}

export default IdDesContainer;

