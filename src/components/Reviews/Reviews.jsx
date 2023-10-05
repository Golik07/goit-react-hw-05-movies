import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'service/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchReviewsValue = async () => {
      try {
        const resolutes = await fetchReviews(moviesId);
        setReviews(resolutes);
        console.log(resolutes);
      } catch (error) {}
    };
    fetchReviewsValue();
  }, [moviesId]);

  return (
    <>
      <section>
        <ul>
          {reviews.length > 0 ? (
            reviews.map(({ id, content, author }) => (
              <li key={id}>
                <h2>Author:{author}</h2>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <p>We dont't have any reviews for this movie</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Reviews;
