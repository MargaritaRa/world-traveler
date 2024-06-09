import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

function CountryInfo({ country }) {

    return (
        <Paper
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


