import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountryInfo from './CountryInfo';
import CountryList from './CountryList';

function IdDesContainer() {
    const { id } = useParams();
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
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
                // console.log('Filtered countries:', data);
                const filteredCountries = data.filter(country => country.continent.toLowerCase() === id.toLowerCase());
                setCountries(filteredCountries);
            })
            .catch((error) => console.error('Error fetching destinations:', error));
    }, [id]);
    
    useEffect(() => {
        if (id) {
            fetch(`/api/destinations/${id}`)
                .then((resp) => {
                    if (!resp.ok) {
                        throw new Error('Failed to fetch country details');
                    }
                    return resp.json();
                })
                .then((data) => {
                    setSelectedCountry(data);
                })
                .catch((error) => console.error('Error fetching country:', error));
        }
    }, [id]);

    useEffect(() => {
        fetch('/api/favorites')
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Failed to fetch favorites');
                }
                return resp.json();
            })
            .then((data) => {
                setFavorites(data);
            })
            .catch((error) => console.error('Error fetching favorites:', error));
    }, []);


    const handleCountrySelect = (countryId) => {
        // console.log('Selected country:', countryId);
        fetch(`/api/destinations/${countryId}`)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Failed to fetch country details');
                }
                return resp.json();
            })
            .then((data) => {
                setSelectedCountry(data);
            })
            .catch((error) => console.error('Error fetching country:', error));
    }

    const handleAddToFavorites = (countryId, isAdding) => {
        // console.log('Adding to favorites:', countryId, isAdding);
        if (isAdding) {
            fetch('/api/favorites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ country_id: countryId }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add favorite');
                }
                return response.json();
            })
            .then(newFavorite => {
                setFavorites(prevFavorites => [...prevFavorites, newFavorite]);
            })
            .catch(error => console.error('Error adding favorite:', error));
        } else {
            const favoriteToRemove = favorites.find(fav => fav.country_id === countryId);
            if (favoriteToRemove) {
                fetch(`/api/favorites/${favoriteToRemove.id}`, {
                    method: 'DELETE',
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to remove favorite');
                    }
                    setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== favoriteToRemove.id));
                })
                .catch(error => console.error('Error removing favorite:', error));
            }
        }
    };


    return (
        <div>
            <CountryList continent={id} countries={countries} onClick={handleCountrySelect} />
            {selectedCountry && (
                <CountryInfo
                    country={selectedCountry}
                    handleAddToFavorites={handleAddToFavorites}
                    isFavorited={favorites.some(fav => fav.country_id === selectedCountry.id)}
                    favorites={favorites}
                />
            )}
        </div>
    );
}

export default IdDesContainer;

