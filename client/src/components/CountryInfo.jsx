//  Component //
import FavoritesButton from './FavoriteButton';
import CountryImageList from './CountryImageList';

// MUI //
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

const primary = red[900];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  fontFamily: "Merienda, serif",
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginTop: 20,
  marginLeft: 25,
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  fontFamily: "Lora, serif",
  padding: theme.spacing(1),
  textAlign: 'Center',
  color: theme.palette.text.secondary,
  marginLeft: 25,
}));
const Item3 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  fontFamily: "Merienda, serif",
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginBottom: 64,
  marginLeft: 25  ,
}));
const Item4 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginTop: 5,
}));

function CountryInfo({ country, handleAddToFavorites, isFavorited }) {

    // const isFavorited = favorites && favorites.some((fav) => fav.country_id === country.id);


    // console.log(country)
   
    // const imageUrl = country.image ? country.image.trim() : '';
    // console.log('Image URL:', imageUrl);

    return (

      <Box sx={{ flexGrow: 1}} className="country-country-info-box" >
        {/* Box 1 */}
        <Grid xs={12} md={5} lg={12}>
          <Item4>
            <Box id="country" sx={{ fontSize: '20px', fontFamily: "Merienda, serif"}}>
              {country.name}
            </Box> 
          </Item4>
        </Grid>
          {/* xs is a total of 12 */}
          <Grid container spacing={2}>
            {/* Box 2 */}
              {/* Box 3 */} 
              <Grid xs={2} lg={3}>
              <Item>
                <Box id="Continent" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                  Continent:
                  </Box>
              </Item>
              <Item2>
                    <Box component="ul" aria-labelledby="continent" sx={{ pl: 2 }}>
                    {country.continent}
                    </Box>
                </Item2>
              </Grid>
              {/*Box 4  */} {/* row 2 */} 
              <Grid xs={3} lg={3}>
              <Item>
                <Box
                  id="Currency"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                  Currency:
                </Box>
              </Item>
              <Item2>
                <Box component="ul" aria-labelledby="Currency" sx={{ pl: 2 }}>
                  {country.currency}
                </Box>
              </Item2>
              </Grid>
              {/* Box 6 */}
              <Grid xs={3} lg={3}>
              <Item>
                <Box
                  id="top-five-genres"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                  Visa:
                </Box>
              </Item>
              <Item3>
                <Button 
                  size='small'
                  variant='text' 
                  sx={{ fontFamily: "Poppin", color: primary}} 
                  href={country.visa}
                  >
                  Visa Embassy Link
                </Button>
              </Item3>
              </Grid>
              {/* Box 13 */}
              <Grid xs={3} lg={3}>
              <Item>
                <Box
                  id="Mannerism"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                  Language:
                </Box>
              </Item>
              <Item2>
                <Box component="ul" aria-labelledby="mannerism" sx={{ pl: 2 }}>
                {country.language}
                </Box>
              </Item2>
              </Grid>
              {/* Box 5 */}
              <Grid xs={1} lg={3}>
              <Item>
                <Box
                  id="Currency"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                  <FavoritesButton 
                    countryId={country.id} 
                    handleAddToFavorites={handleAddToFavorites} 
                    isFavorited={isFavorited} 
                  />
                </Box>
              </Item>
              </Grid>
              {/* Box */}
              <Grid xs={6} lg={4}>
                <Item>
                      <CountryImageList country={country.name} />
                </Item>
              </Grid>
              
              {/* Box 7 */} {/* row 3 */} 
              <Grid xs={6} lg={3}>
              <Item>
                <Box
                  id="Mannerism"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                  Mannerism:
                </Box>
              </Item>
              <Item2>
                <Box component="ul" aria-labelledby="mannerism" sx={{ pl: 2 }}>
                      {country.mannerism}
                      </Box>
              </Item2>
              </Grid>
              {/* Box 8 */}
              <Grid xs={4} lg={3}>
              <Item>
                <Box
                  id="Mannerism"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                  Tipping:
                </Box>
              </Item>
              <Item2>
                <Box component="ul" aria-labelledby="mannerism" sx={{ pl: 2 }}>
                {country.tipping}
                </Box>
              </Item2>
              </Grid>
              {/* Box 9 */} {/* row 4 */} 
              <Grid xs={4} lg={3}>
              <Item>
                <Box
                  id="Mannerism"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                  When:
                </Box>
              </Item>
              <Item2>
                <Box component="ul" aria-labelledby="mannerism" sx={{ pl: 2 }}>
                {country.when}
                </Box>
              </Item2>
              </Grid>
              {/* Box 11 */}
              <Grid xs={4} lg={3}>
              <Item>
                <Box
                  id="Mannerism"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                  Phrases:
                </Box>
              </Item>
              <Item2>
                <Box component="ul" aria-labelledby="mannerism" sx={{ pl: 2 }}>
                {country.phrases}
                </Box>
              </Item2>
              </Grid>
              {/* Box 12 */} {/* row 4 */} 
              <Grid xs={6} lg={3}>
              <Item>
                <Box
                  id="Mannerism"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                  Foods:
                </Box>
              </Item>
              <Item2>
                <Box component="ul" aria-labelledby="mannerism" sx={{ pl: 2 }}>
                {country.foods}
                </Box>
              </Item2>
              </Grid>
            {/* Box 10 */}
            <Grid xs={2} lg={3}>
              <Item>
                <Box
                  id="Mannerism"
                  sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                  >
                  Links:
                </Box>
              </Item>
              <Item3>
                <Button 
                  size='small'
                  variant='text' 
                  sx={{ fontFamily: "Poppin", color: primary}} 
                  href={country.links}
                  >
                  Trip Advisor
                </Button>
              </Item3>
              </Grid>
            </Grid>
      </Box>
    )
}

export default CountryInfo;