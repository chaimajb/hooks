import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css"


function MovieList({ rateInput, searchInput, moviesData  }) {
    return (
        <div className = "movieList">
            {moviesData
                .filter(
                    (movie) =>
                        movie.title
                            .toLowerCase()
                            .includes(searchInput.toLowerCase().trim()) &&
                        movie.rating >= rateInput
                )
                .map((movie, index) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
        </div>
    );
}

export default MovieList;