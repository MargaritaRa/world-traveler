function CountryList({ countries, onClick }) {

    //  This is the list of countries //

    const handleCountryClick = (country) => {
        onClick(country.id);
    };

    return (
        <div className="country-list">
            <h2>List of Countries</h2>
            <ul>
                {countries.map((country) => (
                    <li key={country.id}>
                        <button onClick={() => handleCountryClick(country)}>{country.name}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CountryList;
