import { useState } from 'react';

function GenreSelector({ onSelectGenre }) {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const genres = ['All', 'Drama', 'Crime', 'Action', 'Sci-Fi', 'Animation', 'Adventure', 'Romance'];

  const handleChange = (e) => {
    setSelectedGenre(e.target.value);
    onSelectGenre(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="genre-select" className="mr-2 text-lg font-semibold">
        Select Genre:
      </label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenreSelector;