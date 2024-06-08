import {useState, useEffect} from 'react'
import CountriesCard from './CountriesCard'
import ContentsList from './ContinentList';
import ContinentInfo from './ContinentInfo';
import continentData from './ContinentData';
// import SearchBar from './SearchBar'

function DesContainer(){

    const URL = '/api/destinations'
    const [destination, setDestination] = useState([])
    const [selectedContinent, setSelectedContinent] = useState(null)

    useEffect(() =>{
        fetch(URL)
        .then(res => res.json())
        .then(data => setDestination(data))
        .catch(error => alert(error))
    }, [])

    const continent = ['Overview', 'Top 10 Countries', 'Top Languages Spoken', 'Population', 'Top 5 Music Genres', "Do's and Don't", 'Top 3 Religions']

    const handleContinentSelect = (continent) => {
        setSelectedContinent(continent)
    }

    const filteredDestinations = selectedContinent ? destination.filter(dest => dest.contents.includes(selectedContinent)) : destination;
        
    const mappedCards = destination.map(destination => (
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
            />
        ))

        return (
            <div className='desContainer'>
                <ContentsList continent={continent} onSelect={handleContinentSelect} />
                <div className='main-content'>
                    {selectedContinent === 'Overview' ? (
                        <ContinentInfo {...continentData.centralAmericaCaribbean} />
                    ) : (
                        <div className='country-list'>
                            {/* {mappedCards} */}
                        </div>
                    )}
                </div>
            </div>
        );
}
export default DesContainer