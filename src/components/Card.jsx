import React from 'react';

const Card = ({ country }) => {
    return (
        <div className="card">
            <div className="infos">
                <img src={country.flags.svg} alt={"Drapeau de " + country.translations.fra.common} />
                <h2>{country.translations.fra.common}</h2>
                <h2>{}</h2>
                <p>Pop. {country.population.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default Card;