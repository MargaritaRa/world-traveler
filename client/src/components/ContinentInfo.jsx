import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function ContinentInfo({ name, population, languages, topCountries, religions, musicGenres, mannerisms, dosAndDonts }) {
    return (
        
        <Box sx={{ flexGrow: 1 }} >
            <Link to={`/destinations/${name}`} className="country-list-link">View Country List</Link>
            <Grid container spacing={2}>
                <Grid xs={12} md={5} lg={9}>
                <Item>{name}</Item>
                </Grid>
                <Grid container xs={12} md={7} lg={8} spacing={4}>
                <Grid xs={6} lg={3}>
                    <Item>
                    <Box
                        id="population"
                        sx={{ fontSize: '12px', textTransform: 'uppercase', fontWeightBold: 800 }}
                    >
                        Population
                    </Box>
                    <Box component="ul" aria-labelledby="population" sx={{ pl: 2 }}>
                    {population}
                    </Box>
                    </Item>
                </Grid>
                <Grid xs={6} lg={3}>
                    <Item>
                    <Box
                        id="language"
                        sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                    >
                        Languages Spoken
                    </Box>
                    <Box component="ul" aria-labelledby="language" sx={{ pl: 2 }}>
                    `<ul>{languages.map((language, index) => <li key={index}>{language}</li>)}</ul>
                    </Box>
                    </Item>
                </Grid>
                <Grid xs={6} lg={3}>
                    <Item>
                    <Box
                        id="top-ten-countries"
                        sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                    >
                        Top 10 Countries (by population and influence)
                    </Box>
                    <Box component="ul" aria-labelledby="top-ten-countries" sx={{ pl: 2 }}>
                        <ul>{topCountries.map((country, index) => <li key={index}>{country}</li>)}</ul>
                    </Box>
                    </Item>
                </Grid>
                <Grid xs={6} lg={3}>
                    <Item>
                    <Box
                        id="top-three-religion"
                        sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                    >
                        Top 3 Religions
                    </Box>
                    <Box component="ul" aria-labelledby="top-three-religion" sx={{ pl: 2 }}>
                        <ul>{religions.map((religion, index) => <li key={index}>{religion}</li>)}</ul>
                    </Box>
                    </Item>
                </Grid>
                <Grid xs={6} lg={3}>
                    <Item>
                    <Box
                        id="top-five-genres"
                        sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                    >
                        Top 5 Music Genres
                    </Box>
                    <Box component="ul" aria-labelledby="top-five-genres" sx={{ pl: 2 }}>
                        <ul>{musicGenres.map((genre, index) => <li key={index}>{genre}</li>)}</ul>
                    </Box>
                    </Item>
                </Grid>
                <Grid xs={6} lg={3}>
                    <Item>
                    <Box
                        id="top-five-mannerism"
                        sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                    >
                        Top 5 Mannerisms
                    </Box>
                    <Box component="ul" aria-labelledby="top-five-mannerism" sx={{ pl: 2 }}>
                        <ul>{mannerisms.map((mannerism, index) => <li key={index}>{mannerism}</li>)}</ul>
                    </Box>
                    </Item>
                </Grid>
                <Grid xs={6} lg={3}>
                    <Item>
                    <Box
                        id="top-5-do"
                        sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                    >
                        Top 5 Do’s
                    </Box>
                    <Box component="ul" aria-labelledby="top-5-do" sx={{ pl: 2 }}>
                        <ul>{dosAndDonts.dos.map((doItem, index) => <li key={index}>{doItem}</li>)}</ul>
                    </Box>
                    </Item>
                </Grid>
                <Grid xs={6} lg={3}>
                    <Item>
                    <Box
                        id="top-five-dont"
                        sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                    >
                        Top 5 Don’ts
                    </Box>
                    <Box component="ul" aria-labelledby="top-five-dont" sx={{ pl: 2 }}>
                        <ul>{dosAndDonts.donts.map((dontItem, index) => <li key={index}>{dontItem}</li>)}</ul>
                    </Box>
                    </Item>
                </Grid>
                </Grid>
                <Grid
                xs={12}
                container
                justifyContent="space-between"
                alignItems="center"
                flexDirection={{ xs: 'column', sm: 'row' }}
                sx={{ fontSize: '12px' }}
                >
                <Grid sx={{ order: { xs: 2, sm: 1 } }}>
                    <Item>© Copyright</Item>
                </Grid>
                <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
                    <Grid>
                    <Item>Link A</Item>
                    </Grid>
                    <Grid>
                    <Item>Link B</Item>
                    </Grid>
                    <Grid>
                    <Item>Link C</Item>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContinentInfo;


{/* <div className="continent-info">
<h2>{name}</h2>
<Link to={`/destinations/${name}`} className="country-list-link">View Country List</Link>
<h3>Population</h3>
<p>{population}</p>
<h3>Languages Spoken</h3>
<ul>
    {languages.map((language, index) => <li key={index}>{language}</li>)}
</ul>
<h3>Top 10 Countries (by population and influence)</h3>
<ul>
    {topCountries.map((country, index) => <li key={index}>{country}</li>)}
</ul>
<h3>Top 3 Religions</h3>
<ul>
    {religions.map((religion, index) => <li key={index}>{religion}</li>)}
</ul>
<h3>Top 5 Music Genres</h3>
<ul>
    {musicGenres.map((genre, index) => <li key={index}>{genre}</li>)}
</ul>
<h3>Top 5 Mannerisms</h3>
<ul>
    {mannerisms.map((mannerism, index) => <li key={index}>{mannerism}</li>)}
</ul>
<h3>Top 5 Do’s and Don’ts</h3>
<h4>Do’s:</h4>
<ul>
    {dosAndDonts.dos.map((doItem, index) => <li key={index}>{doItem}</li>)}
</ul>
<h4>Don’ts:</h4>
<ul>
    {dosAndDonts.donts.map((dontItem, index) => <li key={index}>{dontItem}</li>)}
</ul>
</div> */}
