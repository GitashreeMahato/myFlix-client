import { useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { useParams } from "react-router-dom";

export const GenreList = ({ user, token, movies, updatedUser }) => {
  const { genreName } = useParams();

  // useMemo will recompute the memoized value when one of the dependencies has changed.
  // In this case, it's `movies` or `genreName`. This is useful for expensive calculations.
  const filteredMovies = useMemo(() => {
    // filter() creates a new array with all elements that pass the test
    // implemented by the provided function.
    return movies.filter((movie) =>
      // some() tests whether at least one element in the array passes the test
      // implemented by the provided function.
      movie.Genres.some((genre) => genre.name === genreName)
    );
  }, [movies, genreName]); // Dependencies array

  return (
    <>
      <h1 className="myList-title">Showing All {genreName} Movies</h1>
      <Row>
        {filteredMovies.map((movie) => (
          // Using the movie's _id as the key helps React identify which items have changed.
          <Col className="mb-4" md={3} key={movie._id}>
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
