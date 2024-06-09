import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import ContinentList from './ContinentList';
import ContinentInfo from './ContinentInfo';
import ContinentData from './ContinentData';

function DesContainer() {
    const [destinations, setDestinations] = useState([]);
    const [selectedContinent, setSelectedContinent] = useState(null);

    useEffect(() => {
        fetch('/api/destinations')
            .then(response => response.json())
            .then(data => setDestinations(data))
            .catch(error => console.error('Error fetching destinations:', error));
    }, []);

    const handleContinentSelect = (continent) => {
        setSelectedContinent(continent);
    };

    return (
        <div className='desContainer'>
            <ContinentList continent={Object.keys(ContinentData)} onSelect={handleContinentSelect} />
            <div className='main-content'>
                {selectedContinent ? (
                    <ContinentInfo destinations={destinations} selectedContinent={selectedContinent} {...ContinentData[selectedContinent]} />
                ) : (
                    <p>Please select a continent to see the details</p>
                )}
            </div>
        </div>
    );
}

export default DesContainer;




