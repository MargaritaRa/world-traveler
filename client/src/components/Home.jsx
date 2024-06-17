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
            'url(/image/usa5.jpg)',
            'url(/image/switz2.jpg)',
            'url(/image/egypt1.jpg)',
            'url(/image/egypt2.jpg)',
            'url(/image/vietnam9.jpg)',
            'url(/image/amsterdam1.jpg)',
            'url(/image/aus4.jpg)',
            'url(/image/japan2.jpeg)',
            'url(/image/dr3.jpg)',
            'url(/image/italy1.jpg)',
            'url(/image/peru2.jpg)',
            'url(/image/peru6.jpg)',
            'url(/image/peru7.jpg)',
            'url(/image/japan.jpg)',
            'url(/image/japan8.jpg)',
            'url(/image/vietnam1.jpg)',
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
