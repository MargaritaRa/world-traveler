import React from 'react';

function CountryList({ countries, onClick }) {
    return (
        <ul>
            {countries.map((country) => (
                <li key={country.id} onClick={() => onClick(country.id)}>
                    {country.name}
                </li>
            ))}
        </ul>
    );
}

export default CountryList;
