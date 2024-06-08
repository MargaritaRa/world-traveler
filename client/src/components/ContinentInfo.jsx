import React from 'react';

function ContinentInfo({ name, population, languages, topCountries, religions, musicGenres, mannerisms, dosAndDonts }) {
    return (
        <div className="continent-info">
            <h2>{name}</h2>
            <h3>Population</h3>
            <p>{population}</p>
            <h3>Languages Spoken</h3>
            <ul>
                {languages.map((language, index) => <li key={index}>{language}</li>)}
            </ul>
            <h3>Top 10 Countries (by population and influence)</h3>
            <ul>
                {topCountries.map((country, index) => <li key={index}>{country}</li>)}
            </ul>
            <h3>Top 3 Religions</h3>
            <ul>
                {religions.map((religion, index) => <li key={index}>{religion}</li>)}
            </ul>
            <h3>Top 5 Music Genres</h3>
            <ul>
                {musicGenres.map((genre, index) => <li key={index}>{genre}</li>)}
            </ul>
            <h3>Top 5 Mannerisms</h3>
            <ul>
                {mannerisms.map((mannerism, index) => <li key={index}>{mannerism}</li>)}
            </ul>
            <h3>Top 5 Do’s and Don’ts</h3>
            <h4>Do’s:</h4>
            <ul>
                {dosAndDonts.dos.map((doItem, index) => <li key={index}>{doItem}</li>)}
            </ul>
            <h4>Don’ts:</h4>
            <ul>
                {dosAndDonts.donts.map((dontItem, index) => <li key={index}>{dontItem}</li>)}
            </ul>
        </div>
    );
}

export default ContinentInfo;
