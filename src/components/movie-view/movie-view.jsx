const MovieView = ({movieData, onBackClick})=>{
    return (
        <>
        <div>
            <img src={movieData.imageURL} style={{height: "350px", width: "300px" }} />
        </div>
        <br />
        <div>
            <span>Title : </span>
            <span>{movieData.Title}</span>
        </div>
        <div>
            <span>Description : </span>
            <span>{movieData.Description}</span>
        </div>
        <div>
            <span>Genres : </span>
            <span>{movieData.Genres.Name}</span>
        </div>
        <div>
            <span>Directors : </span>
            <span>{movieData.Directors.Name}</span>
        </div>
        <div>
            <span>Actors : </span>
                <span>{movieData.Actors }  </span>            
        </div>
        <div>
            <span> Release_date: </span>
            <span>{movieData.Release_date}</span>
        </div>
        <div>
            <span>Rating : </span>
            <span>{movieData.Rating}</span>
        </div>
        <div>
            <span>Featured : </span>
            <span>{movieData.Featured}</span>
        </div>
        <br />
        <button onClick={onBackClick}>Back</button>
        </>
    );
};

export {MovieView} ;