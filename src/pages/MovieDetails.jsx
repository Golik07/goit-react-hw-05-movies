import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { fetchInfoAboutMovie } from '../service/api';
import {
  Links,
  Container,
  Section,
  Container_2,
  Text,
  Container_3,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [cast, setCast] = useState({});
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkLocationRed = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchAboutMovie = async () => {
      try {
        const resolutes = await fetchInfoAboutMovie(moviesId);
        setCast(resolutes);
      } catch (error) {}
    };
    fetchAboutMovie();
  }, [moviesId, location]);

  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
    id,
  } = cast;

  const value =
    poster_path &&
    title &&
    release_date &&
    vote_average &&
    overview &&
    genres &&
    genres.length > 0;

  return (
    <>
      {value ? (
        <>
          <Section>
            <br />
            <div>
              <Links to={backLinkLocationRed.current}>Go back</Links>
            </div>
            <br />
            <Container>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt="Movie poster"
                  width={300}
                  height={400}
                />
              </div>
              <Container_2>
                <p>
                  {title} {`(${release_date.split('-')[0]})`}
                </p>
                <p>User Score: {`${(vote_average * 10).toFixed()}%`}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h2>Genres</h2>
                <Container>
                  {genres.map(({ id, name }) => (
                    <Text key={id}>{name}</Text>
                  ))}
                </Container>
              </Container_2>
            </Container>
          </Section>
          <div>
            <Container_3>
              <p>Additional information</p>
              <ul>
                <li>
                  <Link to={`/movies/${id}/cast`}>Cast</Link>
                </li>
                <li>
                  <Link to={`/movies/${id}/reviews`}>Reviews</Link>
                </li>
              </ul>
            </Container_3>

            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      ) : (
        <>
          <Links to={backLinkLocationRed.current}>Go back</Links>
          <div>No data</div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
