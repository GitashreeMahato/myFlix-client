const MovieCard = ({movieData, onMovieClick}) =>{
    // const {movieData} = props;
    // const {onBookClick} = props;
    return ( <div onClick={() =>{
        onMovieClick(movieData);
    }}>{movieData.Title}</div>)
};
export {MovieCard};