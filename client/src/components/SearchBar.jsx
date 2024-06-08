import React, {useState} from 'react'

function SearchBar({ destinations }){

    const [query, setQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const handleSearch = (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value.trim() !== '') {
            const results = destinations.filter(dest => 
                dest.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredResults(results);
        } else {
            setFilteredResults([]);
        }
    };

    return(
        <div className='searchBar'>
            <form onSubmit={handleSearch}>
                <input 
                    type='text'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Plan you're next trip!"
                />
                <button type='submit'>Search</button>
            </form>
            <div className="search-results">
                {filteredResults.length > 0 ? (
                    <ul>
                        {filteredResults.map((country) => (
                            <li key={country.id}>{country.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    )
}

export default SearchBar