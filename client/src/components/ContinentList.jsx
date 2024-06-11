function ContinentList({ continent, onSelect }) {

    //  This is the list of continents //

    const handleContinentClick = (continent) => {
        onSelect(continent);
    };

    return (
        <div className="continent-list">
            <h2>List of Continents</h2>
            <ul>
                {continent.map((continent, value) => (
                    <li key={value}>
                        <button onClick={() => handleContinentClick(continent)}>{continent}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContinentList;
