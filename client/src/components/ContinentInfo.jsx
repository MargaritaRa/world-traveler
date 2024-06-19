import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }));
  const Item3 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    fontFamily: "Lora, serif",
    padding: theme.spacing(1),
    textAlign: 'Left',
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

function ContinentInfo({ name, population, image, languages, topCountries, religions, musicGenres, mannerisms, dosAndDonts }) {
    return (
        
        <Box sx={{ flexGrow: 1 }} className="continent-continent-info-box">
        {/* Box 1 */}
        <Grid xs={12} md={5} lg={12}>
          <Item4>
            <Box id="country" sx={{ fontSize: '20px', fontFamily: "Merienda, serif" }}>
              {name}
            </Box> 
          </Item4>
        </Grid>
        
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Box id="population" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Population
              </Box>
            </Item>
            <Item2>
              <Box component="ul" aria-labelledby="population" sx={{ pl: 2 }}>
                {population}
              </Box>
            </Item2>
            <Divider />
            <Item2>
              <Link to={`/destinations/${name}`} className="country-list-link">
                View Country List
              </Link>
            </Item2>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Box id="language" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Languages Spoken
              </Box>
            </Item>  
            <Item3> 
              <Box component="ul" aria-labelledby="language" sx={{ pl: 2 }}>
                <ul>{languages.map((language, index) => <li key={index}>{language}</li>)}</ul>
              </Box>
            </Item3> 
          </Grid>
        
          <Grid item xs={12} sm={6} md={4}>
            <Item>
                <Box id="map" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Map
                </Box>
            </Item>  
            <Item2>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={{ maxWidth: 350, backgroundColor: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>
                    <CardMedia
                    component="img"
                    sx={{ height: 140, width: '100%', objectFit: 'cover' }}
                    image={image}
                    title={`${name} Map`}
                    />
                </Card>
                </Box>
            </Item2>
            </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Box id="top-ten-countries" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Top 10 Countries (by population and influence)
              </Box>
            </Item>
            <Item3>
              <Box component="ul" aria-labelledby="top-ten-countries" sx={{ pl: 2 }}>
                <ul>{topCountries.map((country, index) => <li key={index}>{country}</li>)}</ul>
              </Box>
            </Item3>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Box id="top-three-religion" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Top 3 Religions
              </Box>
            </Item>
            <Item3>
              <Box component="ul" aria-labelledby="top-three-religion" sx={{ pl: 2 }}>
                <ul>{religions.map((religion, index) => <li key={index}>{religion}</li>)}</ul>
              </Box>
            </Item3>
          </Grid>
        
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Box id="top-five-genres" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Top 5 Music Genres
              </Box>
            </Item>
            <Item3>
              <Box component="ul" aria-labelledby="top-five-genres" sx={{ pl: 2 }}>
                <ul>{musicGenres.map((genre, index) => <li key={index}>{genre}</li>)}</ul>
              </Box>
            </Item3>    
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Box id="top-five-mannerism" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Top 5 Mannerisms
              </Box>
            </Item>
            <Item3>
              <Box component="ul" aria-labelledby="top-five-mannerism" sx={{ pl: 2 }}>
                <ul>{mannerisms.map((mannerism, index) => <li key={index}>{mannerism}</li>)}</ul>
              </Box>
            </Item3>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Box id="top-5-do" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Top 5 Do’s
              </Box>
            </Item>
            <Item3>
              <Box component="ul" aria-labelledby="top-5-do" sx={{ pl: 2 }}>
                <ul>{dosAndDonts.dos.map((doItem, index) => <li key={index}>{doItem}</li>)}</ul>
              </Box>
            </Item3>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Item>
              <Box id="top-five-dont" sx={{ fontSize: '12px', textTransform: 'uppercase' }}>
                Top 5 Don’ts
              </Box>
            </Item>
            <Item3>
              <Box component="ul" aria-labelledby="top-five-dont" sx={{ pl: 2 }}>
                <ul>{dosAndDonts.donts.map((dontItem, index) => <li key={index}>{dontItem}</li>)}</ul>
              </Box>
            </Item3>
          </Grid>
        </Grid>
      </Box>
    );
}

export default ContinentInfo;

