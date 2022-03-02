import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";

import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {
  const [moviesData, setMoviesData] = useState(moviesDataJSON);
  const [movies, setMovies] = useState(moviesDataJSON);


  function addMovie(newMovie) {
    setMoviesData([...moviesData, newMovie])
    // what if i want to sort or filter before setting the state? ...
    setMovies([...moviesData, newMovie].sort((a, b)=>a.title > b.title))
  };

  function filterMovieList(selection) {
    const filteredMovies = moviesData.filter((movie)=>{
      if(selection === "All") return movies
      else return movie.title[0].toLowerCase() === selection.toLowerCase()

    })
    setMovies(filteredMovies)
  };

  return (
    <div>
      <FilterMovies filterMovieList={filterMovieList} />
      <AddMovie addMovie={addMovie} />
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
