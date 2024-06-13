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
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeju03n7p4g8UVAECZhx2zY6ukEnHAhMOBA&s)"
        ];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        // console.log('Selected background image:', randomImage);
        document.documentElement.style.setProperty('--background-image', randomImage);

        return () => {
            document.body.style.backgroundImage = '';
        };
    }, []);

    return (
        <div className='searchDiv'>
            <SearchBar destinations={destinations}/>
        </div>
    );
}

export default Home;
