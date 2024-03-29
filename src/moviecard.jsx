import React, { useState } from 'react';

function MovieCard({ props }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={`moviecard ${showDetails ? 'details' : 'overview'}`} onClick={handleClick}>
            {!showDetails && (
                <div className="overview">
                    <img src={props.Poster} alt={props.Title} />
                    <div>
                        <h1>{props.Title}</h1>
                        <p>{props.Year}</p>
                        
                    </div>
                </div>
            )}

            {showDetails && (
                <div className="details">
                    <p>Plot: {props.Plot}</p>
                    <p>Director: {props.Director}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    );
}

export default MovieCard;
