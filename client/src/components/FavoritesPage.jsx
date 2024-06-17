// React //
import { useEffect, useState } from 'react';
// MUI //
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import MuiAlert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const primary = red[900];

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
            // console.log('Notes saved successfully');
            setTimeout(() => setNotification(null), 5000);
          })
          .catch(error => {
            setError('Error saving notes: ' + error.message);
            setTimeout(() => setError(null), 5000);
        });
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
    const renderFavorites = () => {
      return favorites.map(fav => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={fav.id}>
            <Card sx={{ maxWidth: 345, fontFamily: "Dancing Script, cursive" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {fav.countries && fav.countries.name ? fav.countries.name : 'Unknown'}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Poppin", color: primary }}>
                  <p>Continent: {fav.countries && fav.countries.continent ? fav.countries.continent : 'Unknown'}</p>
                  <p>Currency: {fav.countries && fav.countries.currency ? fav.countries.currency : 'Unknown'}</p>
                  <p>Language: {fav.countries && fav.countries.language ? fav.countries.language : 'Unknown'}</p>
                </Typography>
              </CardContent>
              <TextField
                label="Notes"
                multiline
                rows={4}
                value={fav.notes}
                onChange={(event) => handleNotesChange(fav.id, event.target.value)}
                sx={{ fontFamily: "Dancing Script, cursive" }}
              />
              <CardActions>
                <Button sx={{ fontFamily: "Dancing Script, cursive", color: primary }} variant="outlined" endIcon={<SendIcon />} onClick={() => handleSaveNotes(fav.id)}>
                  Save
                </Button>
                <Button sx={{ fontFamily: "Dancing Script, cursive", color: primary }} variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(fav.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
      ));
    }

    return (
      <div>
        <h1 className='fav-title'>My Favorites<FavoriteBorderIcon/></h1>
        {favorites.length === 0 ? (
            <p>No favorites yet!</p>
        ) : (
            <Grid container spacing={2}>
                {renderFavorites()}
            </Grid>
        )}
        {notification && <Alert severity="success">{notification}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
      </div>
        );
    }

export default FavoritesPage;