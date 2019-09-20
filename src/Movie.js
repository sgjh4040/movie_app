import React from "react";
import PropType from "prop-types";
import "./Movie.css";


function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} title={title} alt={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )

}

Movie.prototype = {
    id: PropType.number.isRequired,
    year: PropType.string.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired
};

export default Movie;