import {useState, useEffect} from 'react'
import CountriesCard from './CountriesCard'
import ContinentList from './ContinentList';
import ContinentInfo from './ContinentInfo';
import ContinentData from './ContinentData';
// import SearchBar from './SearchBar'

function DesContainer(){

    const URL = '/api/destinations'
    const [destination, setDestination] = useState([])
    const [selectedContinent, setSelectedContinent] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() =>{
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            // console.log('Fetched destinations:', data);
            setDestination(data);
        })
        .catch(error => alert(error))
    }, [])


    const handleContinentSelect = (continent) => {
        console.log('Selected continent:', continent)
        setSelectedContinent(continent);
        // Reset selected country when a new continent is selected
        setSelectedCountry(null); 
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };

    const filteredDestinations = selectedContinent ? destination.filter(dest => dest.continent === selectedContinent) : destination;

    const mappedCards = filteredDestinations.map(destination => (
        <CountriesCard 
            key={destination.id} 
            image={destination.image} 
            name={destination.name} 
            continent={destination.continent} 
            currency={destination.currency} 
            language={destination.language} 
            mannerism={destination.mannerism} 
            visa={destination.visa} 
            tipping={destination.tipping} 
            when={destination.when} 
            links={destination.links} 
            phrases={destination.phrases} 
            foods={destination.foods} 
            onSelect={handleCountrySelect}
            />
        ))
        // console.log('Mapped cards:', mappedCards);

        return (
            <div className='desContainer'>
                <ContinentList continent={Object.keys(ContinentData)} onSelect={handleContinentSelect} />
                <div className='main-content'>
                    {selectedContinent && !selectedCountry && (
                        <ContinentInfo {...ContinentData[selectedContinent]} />
                    )}
                    {selectedCountry && (
                        <CountriesCard {...selectedCountry} />
                    )}
                    {!selectedContinent && (
                        <div>Please select a continent to see more details.</div>
                    )}
                </div>
            </div>
        );
}
export default DesContainer