import { useState, useEffect } from 'react';
import GenreSelector from './components/GenreSelector';
import MovieList from './components/MovieList';
import moviesData from './data/movies.json';

function App() {
  console.log("App rendered");
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Movie Recommendation App</h1>
      <GenreSelector onSelectGenre={handleGenreSelect} />
      <MovieList movies={movies} selectedGenre={selectedGenre} />
    </div>
  );
}

export default App;