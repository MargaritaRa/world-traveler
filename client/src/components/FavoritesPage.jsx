import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import MuiAlert from '@mui/material/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);
    const [notification, setNotification] = useState(null);
    const [error, setError] = useState(null)

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


      // Save feature //
      const handleSaveNotes = (favoriteId) => {
        const favoriteToUpdate = favorites.find(fav => fav.id === favoriteId);
        if (!favoriteToUpdate) {
          console.error('Favorite not found');
          return;
        }
      
        fetch(`/api/favorites/${favoriteId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            notes: favoriteToUpdate.notes,
          }),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to save notes');
            }
            setNotification('Notes saved successfully');
            console.log('Notes saved successfully');
            setTimeout(() => setNotification(null), 5000);
          })
          .catch(error => setError('Error saving notes: ' + error.message));
          setNotification('Failed to save notes')
          setTimeout(() => setError(null), 5000);
      };

      const handleNotesChange = (favoriteId, newNotes) => {
        setFavorites(prevFavorites => prevFavorites.map(fav => {
            if (fav.id === favoriteId) {
                return { ...fav, notes: newNotes };
            }
            return fav;
        }));
    };


    // console.log('Favorites:', favorites);
    // Render favorite countries
    const renderFavorites = (() => {
      // console.log('Favorites:', favorites);
      return favorites.map(fav => {
        // console.log('Favorite:', fav);
        return (
          <div key={fav.id}>
            <h2>{fav.countries && fav.countries.name ? fav.countries.name : 'Unknown'}</h2>
            <p>Continent: {fav.countries && fav.countries.continent ? fav.countries.continent : 'Unknown'}</p>
            <p>Currency: {fav.countries && fav.countries.currency ? fav.countries.currency : 'Unknown'}</p>
            <p>Language: {fav.countries && fav.countries.language ? fav.countries.language : 'Unknown'}</p>
            <TextField
              label="Notes"
              multiline
              rows={4}
              value={fav.notes}
              onChange={(event) => handleNotesChange(fav.id, event.target.value)}
            />
            <Button onClick={() => handleSaveNotes(fav.id)}>Save</Button>
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
        {notification && <Alert severity="success">{notification}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
      </div>
        );
    }

export default FavoritesPage;


