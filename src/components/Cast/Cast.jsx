import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'service/api';

const Cast = () => {
  const [casts, setCast] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const resolutes = await fetchCredits(moviesId);
        if (resolutes.length > 0) {
          setCast(resolutes);
        }
      } catch (error) {}
    };
    fetchCast();
  }, [moviesId]);

  return (
    <div>
      <ul>
        {casts.map(({ name, character, profile_path, id }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt="actor"
                width={80}
                height={100}
              />
            )}
            <p>{name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
