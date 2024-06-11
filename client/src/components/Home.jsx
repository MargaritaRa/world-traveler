import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

function Home() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('/api/destinations')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched destinations:', data); // Log fetched data
                setDestinations(data);
            })
            .catch(error => console.error('Error fetching destinations:', error));
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <SearchBar destinations={destinations} />
        </div>
    );
}

export default Home;
