function MovieList({ movies, selectedGenre }) {
  const filteredMovies = selectedGenre === 'All'
    ? movies
    : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredMovies.map((movie, index) => (
        <div key={index} className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{movie.title}</h2>
          <p className="text-gray-600">Genre: {movie.genre}</p>
          <p className="text-gray-800">Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;