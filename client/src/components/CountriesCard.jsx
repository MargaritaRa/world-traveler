function CountriesCard({name, continent, image, currency, language, mannerism, visa, tipping, when, links, phrases, foods }) {

    return (

        // Shows a list of Countries at once //

        <article className="countryPost">
            <div className="country-img">
                <img src={image} alt={name} />
            </div>
            <div className="country-footer">
                <h3>{name}</h3>
                <h4 className="continent">{continent}</h4>
                <h4>{currency}</h4>
                <h4>{language}</h4>
                <h4>{mannerism}</h4>
                <h4>{visa}</h4>
                <h4>{tipping}</h4>
                <h4>{when}</h4>
                <h4>{links}</h4>
                <h4>{phrases}</h4>
                <h4>{foods}</h4>
            </div>
            
        </article>
    );
}

export default CountriesCard