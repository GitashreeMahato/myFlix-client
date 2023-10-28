import { Row, Col } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';
import './myList.scss';

export const MyList = ({ user, token, movie, updatedUser }) => {
  let result = movie.filter((movie) => user.favorite_movies.includes(movie._id));
  console.log(result);
  return (
    <>
      <Row>
        {result.map((movie) => (
          <Col className='mb-4' md={3}>
            <MovieCard
              movie={movie}
              user={user}
              updatedUser={updatedUser}
              token={token}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};
