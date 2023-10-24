import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap"; 
const MovieCard = ({movie, onMovieClick}) =>{
    
    return ( 
//     <div onClick={() =>{
//         onMovieClick(movie);
//     }}>{movie.Title}</div>)
// };

<Card className="h-100">
      <Card.Img variant="top" src={movie.imageURL}  />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="link">
          More details
        </Button>
      </Card.Body>
    </Card>
)}
    
// define all the props constraints for the BookCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        imageURL: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        // Directors: PropTypes.string.isRequired,
        // Genres: PropTypes.string.isRequired,

    
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
export {MovieCard};