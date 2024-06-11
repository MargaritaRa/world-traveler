import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ destinations }) {
    const [query, setQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Destinations prop:', destinations); // Debugging log for initial destinations data
    }, [destinations]);

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission reload
        const value = query.trim();
        console.log('Search query:', value); // Debugging log

        if (value !== '') {
            const results = destinations.filter(dest => {
                console.log('Checking destination:', dest); // Debugging log for each destination
                return dest.name.toLowerCase().includes(value.toLowerCase()) ||
                    dest.continent.toLowerCase().includes(value.toLowerCase());
            });
            console.log('Filtered results:', results); // Debugging log
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        console.log('Input change:', event.target.value); // Debugging log
    };

    const handleResultClick = (id) => {
        console.log('Navigating to:', id); // Debugging log
        navigate(`/destinations/${id}`);
    };

    return (
        <div className='searchBar'>
            <form onSubmit={handleSearch}>
                <input
                    type='text'
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Plan your next trip!"
                />
                <button type='submit'>Search</button>
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
