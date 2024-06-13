// React //
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// MUI //
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchBar({ destinations }) {
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('Destinations prop:', destinations);
      }, [destinations]);

  useEffect(() => {
    if (query !== '') {
      const results = destinations.filter(dest =>
        dest.name.toLowerCase().includes(query.toLowerCase()) ||
        dest.continent.toLowerCase().includes(query.toLowerCase())
      );
      results.sort((a, b) => a.name.localeCompare(b.name));
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [query, destinations]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleResultClick = (id) => {
    navigate(`/destinations/${id}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1, p: 3 }}>
        <Box sx={{ width: '100%', maxWidth: '600px' }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Where to next?"
              inputProps={{ 'aria-label': 'search' }}
              value={query}
              onChange={handleInputChange}
            />
          </Search>
          {query !== '' && filteredResults.length === 0 && (
            <Typography>No results found</Typography>
          )}
          {filteredResults.length > 0 && (
            <Box className="search-results" sx={{ width: '100%', maxWidth: '600px',position: 'relative', top: 0 }}>
              <ul>
                {filteredResults.map((result) => (
                  <li key={result.id} onClick={() => handleResultClick(result.id)}>
                    {result.name} ({result.continent})
                  </li>
                ))}
              </ul>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

SearchBar.propTypes = {
  window: PropTypes.func,
  destinations: PropTypes.array.isRequired,
};

export default SearchBar;
