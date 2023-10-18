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
            <span>Genres : </span>
            <span>{movie.Genres.Name}</span>
        </div>
        <div>
            <span>Directors : </span>
            <span>{movie.Directors.Name}</span>
        </div>
        <div>
            <span>Actors : </span>
                <span>{movie.Actors.Name }  </span>            
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

export {MovieView} ;