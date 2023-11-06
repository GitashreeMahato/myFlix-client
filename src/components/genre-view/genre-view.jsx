// import { Row, Col } from 'react-bootstrap';
// import { MovieCard } from '../movie-card/movie-card';

import { useParams } from 'react-router';

export const GenreView = ({ movies, searchByGenre }) => {
  const params = useParams();
  const genre = params.genreName;
  const result = searchByGenre(movies, genre);
  console.log(result);
  return (
    <>
      {/* <Row>
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
      </Row> */}
    </>
  );
};