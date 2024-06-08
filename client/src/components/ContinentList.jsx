import React from 'react';

function ContinentList({ continent, onSelect }) {
    return (
        <div className="continent-list">
            <h2>Continents</h2>
            <ul>
                {continent.map((continent, index) => (
                    <li key={index} onClick={() => onSelect(continent)}>
                        {continent}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContinentList;
