import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [genreFilter, setGenreFilter] = useState('All');

  useEffect(() => {
    fetch('http://localhost:3000/api/movies')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); // Debug log
        setMovies(data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setError(error.message);
      });
  }, []);

  const filteredMovies = genreFilter === 'All'
    ? movies
    : movies.filter(movie => movie.genre === genreFilter);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-blue-600">Movie Recommendation App</h1>
      <select
        className="mt-4 p-2 border rounded"
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
      >
        <option value="All">All Genres</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : filteredMovies.length > 0 ? (
        <ul className="mt-4">
          {filteredMovies.map((movie, index) => (
            <li key={index} className="my-2">
              {movie.title || movie.name || 'Untitled'} - Rating: {movie.rating || movie.rate || 'N/A'}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4">Loading movies...</p>
      )}
    </div>
  );
}

export default App;