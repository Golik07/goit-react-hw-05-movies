import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchPopular } from 'service/api';

const Movieist = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const results = await fetchPopular();
        setMovies(results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPopularMovies();
  }, []);

  return (
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
  );
};

export default Movieist;
