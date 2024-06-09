import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    // Fetch favorite countries data from the backend
    useEffect(() => {
        fetch('/api/favorites')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch favorites');
                }
                return response.json();
            })
            .then(data => setFavorites(data))
            .catch(error => console.error('Error fetching favorites:', error));
    }, []);

    // Function to delete a favorite country
    const handleDelete = (favoriteId) => {
        fetch(`/api/favorites/${favoriteId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete favorite');
                }
                setFavorites(favorites.filter(fav => fav.id !== favoriteId));
            })
            .catch(error => console.error('Error deleting favorite:', error));
    };
    console.log('Favorites:', favorites);
    // Render favorite countries
    const renderFavorites = (() => {
      console.log('Favorites:', favorites);
      return favorites.map(fav => {
        console.log('Favorite:', fav);
        return (
          <div key={fav.id}>
            <h2>{fav.countries && fav.countries.name ? fav.countries.name : 'Unknown'}</h2>
            <p>Continent: {fav.countries && fav.countries.continent ? fav.countries.continent : 'Unknown'}</p>
            <p>Currency: {fav.countries && fav.countries.currency ? fav.countries.currency : 'Unknown'}</p>
            <p>Language: {fav.countries && fav.countries.language ? fav.countries.language : 'Unknown'}</p>
            <p>Notes: {fav.notes}</p>
            <Button startIcon={<DeleteIcon />} onClick={() => handleDelete(fav.id)}>Delete</Button>
          </div>
        );
      });
    })

    return (
        <div>
            <h1>Favorite Page</h1>
            {favorites.length === 0 ? (
                <p>No favorites yet!</p>
            ) : (
                renderFavorites()
            )}
        </div>
    );
}

export default FavoritesPage;


