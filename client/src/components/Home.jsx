import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

function Home() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('/api/destinations')
            .then(response => response.json())
            .then(data => {
                // console.log('Fetched destinations:', data);
                setDestinations(data);
            })
            .catch(error => console.error('Error fetching destinations:', error));
    }, []);

    useEffect(() => {
        const images = [
            'url(/image/spain1.jpg)',
            'url(/image/spain2.jpg)',
            'url(/image/spain3.jpg)',
            'url(/image/egypt1.jpg)',
            'url(/image/egypt2.jpg)',
            'url(/image/egypt3.jpg)',
        ];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        // console.log('Selected background image:', randomImage);
        document.documentElement.style.setProperty('--background-image', randomImage);

    return () => {
      document.documentElement.style.setProperty('--background-image', 'none');
    };
  }, []);

    return (
        <div className='searchDiv'>
            <SearchBar destinations={destinations}/>
        </div>
    );
}

export default Home;
