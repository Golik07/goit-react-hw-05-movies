import { useEffect, useState } from 'react';
import { fetchSearchMovie } from '../service/api';
import Search from '../components/Search/Search';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(movie ? movie : '');

  const location = useLocation();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        if (!query) {
          return;
        }
        const results = await fetchSearchMovie(query);
        setMovies(results);
      } catch (error) {}
    };
    fetchPopularMovies();
  }, [query]);

  const handleSubmitMovie = e => {
    e.preventDefault();
    const form = e.target;
    setQuery(movie);
    form.reset();
  };

  const updateQueryString = quertys => {
    if (quertys === '') {
      return setSearchParams({ query: '' });
    }
    return setSearchParams({ query: quertys });
  };

  return (
    <div>
      <Search onChange={updateQueryString} handleSubmit={handleSubmitMovie} />
      <div>
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
