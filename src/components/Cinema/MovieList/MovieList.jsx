import { getAllMovies } from "../../../Data/movies";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = () => {
    
  const movies = getAllMovies();

  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
