import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ destinations }) {
    const [query, setQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // console.log('Destinations prop:', destinations);
    }, [destinations]);

    const handleSearch = (event) => {
        event.preventDefault();
        const value = query.trim();
        // console.log('Search query:', value);

        if (value !== '') {
            const results = destinations.filter(dest => {
                // console.log('Checking destination:', dest);
                return dest.name.toLowerCase().includes(value.toLowerCase()) ||
                    dest.continent.toLowerCase().includes(value.toLowerCase());
            });
            // console.log('Filtered results:', results);
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        // console.log('Input change:', event.target.value);
    };

    const handleResultClick = (id) => {
        // console.log('Navigating to:', id); 
        navigate(`/destinations/${id}`);
    };

    return (
        <div className='searchBarContainer'>
        <form onSubmit={handleSearch} className='searchForm'>
            <input
                type='text'
                value={query}
                maxLength={128}
                onChange={handleInputChange}
                placeholder="Where's your next adventure?"
                className='searchBar'
            />
            <button className="searchBtn" type='submit'><SearchIcon/>Search</button>
        </form>
        {query !== '' && filteredResults.length === 0 && (
            <p>No results found</p>
        )}
        <div className="search-results">
            {filteredResults.length > 0 && (
                <ul>
                    {filteredResults.map((result) => (
                        <li key={result.id} onClick={() => handleResultClick(result.id)}>
                            {result.name} ({result.continent})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
    );
}

export default SearchBar;
