import { useEffect, useState, useRef } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import Navbar from '../components/Navbar';

const API_URL = 'https://www.omdbapi.com/?apikey=ab416681';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('');
  const debounceRef = useRef(null);

  // Search function
  const searchMovies = async (title = '') => {
    if (!title.trim()) return;
    try {
      const res = await fetch(`${API_URL}&s=${encodeURIComponent(title)}`);
      const data = await res.json();
      setMovies(data.Search || []);
    } catch (err) {
      console.error('Fetch error:', err); 
      setMovies([]);
    }
  };

  // Run once on mount with default movie set
  useEffect(() => {
    searchMovies('Avengers');
  }, []);

  // Live search with debounce
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (term.trim()) searchMovies(term.trim());
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [term]);

  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />

      <div className="flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-accent to-transparent bg-clip-text text-transparent">
          RishuTV
        </h1>

        {/* Search Box */}
        <div className="flex items-center w-full sm:w-3/4 mt-10 bg-[#1f2123] px-6 py-4 rounded-full shadow-inner">
          <input
            className="flex-1 bg-transparent outline-none text-gray-300 placeholder-gray-500 text-lg font-raleway"
            placeholder="Search for movies"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            className="w-8 h-8 cursor-pointer"
            onClick={() => searchMovies(term.trim())}
          />
        </div>

        {/* Movie Results */}
        {movies.length ? (
          <div className="flex flex-wrap justify-center mt-10">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          term.trim() && (
            <div className="mt-10 text-accent font-raleway text-lg">
              No movies found
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Movies;
