
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

function CountryInfo({ country, handleAddToFavorites }) {

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
            <Grid xs={2}>
              <Item>{country.name}</Item>
            </Grid>
            <Grid xs={3}>
              <Item>Currency: {country.currency}</Item>
            </Grid>
            <Grid xs={3}>
              <Item>Continent: {country.continent}</Item>
            </Grid>
            <Grid xs={4}>
              <Item><FavoritesButton countryId={country.id} handleAddToFavorites={handleAddToFavorites} /></Item>
            </Grid>
            <Grid xs={4}>
              <Item><Img src={country.image} alt={country.name} /></Item>
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



// function CountryInfo({ country }) {

//     return (
//         <div className="country-info">
//             <h2>{country.name}</h2>
//             <img src={country.image} alt={country.name} />
//             <p>Continent: {country.continent}</p>
//             <p>Currency: {country.currency}</p>
//             <p>Language: {country.language}</p>
//             <p>Mannerism: {country.mannerism}</p>
//             <p>Visa: {country.visa}</p>
//             <p>Tipping: {country.tipping}</p>
//             <p>When: {country.when}</p>
//             <p>Links: {country.links}</p>
//             <p>Phrases: {country.phrases}</p>
//             <p>Foods: {country.foods}</p>
//         </div>
//     );
// }

{/* <Paper
        sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }} >
             <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img src={country.image} alt={country.name} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              {country.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
              Language: {country.language}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Currency: {country.currency}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              Visa: {country.visa}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
            When: {country.when}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
          </Paper> */}

