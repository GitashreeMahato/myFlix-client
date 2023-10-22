import PropTypes from "prop-types";
const MovieCard = ({movie, onMovieClick}) =>{
    
    return ( 
    <div onClick={() =>{
        onMovieClick(movie);
    }}>{movie.Title}</div>)
};
// define all the props constraints for the BookCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        ImageURL: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        // Directors: PropTypes.string.isRequired,
        // Genres: PropTypes.string.isRequired,

    onMovieClick: PropTypes.func.isRequired
    })};
export {MovieCard};