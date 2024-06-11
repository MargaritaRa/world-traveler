import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import FavoritesButton from './FavoriteButton';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function CountryInfo({ country, handleAddToFavorites, favorites }) {

    const isFavorited = favorites.some(fav => fav.id === country.id);

    console.log(country)
   
    // const imageUrl = country.image ? country.image.trim() : '';
    // console.log('Image URL:', imageUrl);

    return (
        <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 1000,
          flexGrow: 1,
          marginBottom: 64, 
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
        >
          {/* xs is a total of 12 */}
          <Grid container spacing={2}>
            <Grid xs={4}>
              <Item>{country.name}</Item>
            </Grid>
            <Grid xs={8}>
              <Item>
                <Img 
                  src={country.image} 
                  alt={country.name} 
                  onError={(e) => e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimMZoB13-Lecpkz3s_bwRZt-MW6W9PZfG-g&s'}
                  />
              </Item>
              {/* <Item>
                    {imageUrl ? (
                        <Img 
                            src={imageUrl} 
                            alt={country.name} 
                            onError={(e) => e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimMZoB13-Lecpkz3s_bwRZt-MW6W9PZfG-g&s'}
                        />
                    ) : (
                        <p>No image available</p>
                    )}
                </Item> */}

            </Grid>
            <Grid xs={3}>
              <Item>Currency: {country.currency}</Item>
            </Grid>
            <Grid xs={3}>
              <Item>Continent: {country.continent}</Item>
            </Grid>
            <Grid xs={4}>
              <Item><FavoritesButton countryId={country.id} isFavorited={isFavorited} handleAddToFavorites={handleAddToFavorites} /></Item>
            </Grid>
            <Grid xs={4}>
              <Item>Visa: {country.visa}</Item>
            </Grid>
            <Grid xs={8}>
              <Item>Mannerism: {country.mannerism}</Item>
            </Grid>
            <Grid xs={5}>
              <Item>Tipping: {country.tipping}</Item>
            </Grid>
            <Grid xs={6}>
              <Item>When: {country.when}</Item>
            </Grid>
            <Grid xs={3}>
              <Item>Links: {country.links}</Item>
            </Grid>
            <Grid xs={9}>
              <Item>Phrases: {country.phrases}</Item>
            </Grid>
            <Grid xs={8}>
              <Item>Foods: {country.foods}</Item>
            </Grid>
            <Grid xs={4}>
              <Item>Language: {country.language}</Item>
            </Grid>
          </Grid>
        </Paper>
    )
}

export default CountryInfo;