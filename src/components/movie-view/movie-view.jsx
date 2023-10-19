import PropTypes from 'prop-types';
const MovieView = ({movie, onBackClick})=>{
    return (
        <>
        <div>
            <img src={movie.imageURL} style={{height: "350px", width: "300px" }} />
        </div>
        <br />
        <div>
            <span>Title : </span>
            <span>{movie.Title}</span>
        </div>
        <div>
            <span>Description : </span>
            <span>{movie.Description}</span>
        </div>
        <div>
            <span>Genre : </span>
            <span>{movie.Genres}</span>
        </div>
        <div>
            <span>Director : </span>
            <span>{movie.Directors}</span>
        </div>
        <div>
            <span>Actor : </span>
                <span>{movie.Actors }  </span>            
        </div>
        <div>
            <span> Release_date: </span>
            <span>{movie.Release_date}</span>
        </div>
        <div>
            <span>Rating : </span>
            <span>{movie.Rating}</span>
        </div>
        <div>
            <span>Featured : </span>
            <span>{movie.Featured}</span>
        </div>  
        <br />
        <button onClick={onBackClick}>Back</button>
        </>
    );
};

// MovieView.propTypes = {
//     movie: PropTypes.shape({
//         ImageURL: PropTypes.string.isRequired,
//       Title: PropTypes.string.isRequired,
//       Genre: PropTypes.string.isRequired,
//       Description: PropTypes.string.isRequired,
//       Director: PropTypes.string.isRequired,
//       Featured: PropTypes.bool.isRequired
//     }).isRequired,
//     onBackClick: PropTypes.func.isRequired
//   };
export {MovieView} ;