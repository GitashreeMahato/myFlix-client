
import './movie-view.scss';
import { Col, Row, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
// import ReactPlayer from 'react-player';
import { useEffect } from 'react';
// import Swal from 'sweetalert2';
// import { BsBookmarkPlusFill, BsBookmarkPlus } from 'react-icons/bs';

//information for movie information displayed once user clicks a movie
export const MovieView = ({ movies }) => {
  //monitors the DOM and when a movie is clicked it will always scroll to the top if it's not already there.

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //gets movie id from database and uses it as the parameters in the url
  const { movieId } = useParams();

  //searches through the list of database if movies and grabs the id to be displayed in the url
  const movie = movies.find((movie) => movie._id === movieId);

  //searches through the database of movies and filters out movies with the same genre and displays them but not the same movie
  const similarMovies = (genreName) =>
    movies.filter((m) => m.Genres.name == genreName && m._id !== movieId);


  return (
    <>
      <Container id='container' className='p-0 m-0'>
        <Container fluid='true' id='movie-view-section-top'>
          <div id='movie-content'>
            <div className='movie-details'>
              <Row>
                <Col className='col-md-9 p-0 d-flex margin-style' key={movie._id}>
                  <h1 className='title-style font-style-bold'>{movie.Title}</h1>
                  {/* {Favorite ? (
                    <BsBookmarkPlusFill
                      className='full-bookmark move-bookmark-mv'
                      color='#ff6b81'
                      size
                      onClick={removeFavorite}
                    />
                  ) : (
                    <BsBookmarkPlus
                      className='outline-bookmark move-bookmark-mv'
                      size
                      onClick={addFavorite}
                    />
                  )} */}
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className='movie-stats font-style'>
                    {movie.Release_Date} · {movie.Ratings} 
                  </span>
                </Col>
              </Row>
            </div>
            <Row>
              <Col id='col-remove' fluid='true' className='col-xs-7 col-sm-3 col-md-3'>
                <div className='col-xs-5'>
                  <img id='movie-image' src={movie.imageURL} alt='' />
                </div>
              </Col>
              
            </Row>
          </div>
        </Container>
        <Container id='movie-view-section-bottom' className='p-0'>
          <Container
            className='h-100'
            id='movie-description-section-bottom p-0'
          >
            <Row>
              <Col>
                <h2 className='movie-description-heading mt-1 font-style-bold p-1'>
                  Storyline
                </h2>
              </Col>
            </Row>
            <Row>
              <Col className='mb-2 pb-3'>
                <span className='movie-description font-style p-0'>
                  {movie.Description}
                </span>
              </Col>
            </Row>
            <div className='border-top'></div>
            <Col className='pt-2 pb-2'>
              <span className='movie-styles-name font-style-bold p-1'>
                Director{' '}
              </span>
              <span className='movie-styles-name font-style-i'>
                {movie.Directors[0].name}
              </span>
            </Col>
            <div className='border-top'></div>
            {/* <Row>
              <Col className='pt-2 pb-2'>
                <span className='movie-styles-name font-style-bold p-1'>
                  Writers{' '}
                </span>
                <span className='movie-styles-name font-style-i'>
                  {Movie.Writers[0]} ⋆ {Movie.Writers[1]} ⋆ {Movie.Writers[2]}
                  {Movie.Writers[3]}
                </span>
              </Col>
              <div className='border-top'></div>
            </Row> */}
            <Row>
              <Col className='pt-2 pb-2'>
                <span className='movie-styles-name font-style-bold p-1'>
                  Stars{' '}
                </span>
                <span className='movie-styles-name font-style-i'>
                  {movie.Actors[0].name} · {movie.Actors[1].name} · {movie.Actors[2].name} · {movie.Actors[3].name} · {movie.Actors[4].name} 
                </span>
              </Col>
              <div className='border-top'></div>
            </Row>
            <Row>
              <Col className='pt-2 pb-2'>
                <span className='movie-styles-name font-style-bold p-1'>
                  Genres{' '}
                </span>
                <span className='movie-styles-name font-style-i'>
                  {movie.Genres[0].name} · {movie.Genres[1].name} · {movie.Genres[2].name} · {movie.Genres[3].name}
                </span>
              </Col>
              <div className='border-top pb-3'></div>
            </Row>
            {/* <Row>
              <Col className='pb-4'>
                <a href={Movie.MovieWatch} target='blank'>
                  <Button
                    className='watch-button'
                    variant='btn btn-success mt-'
                  >
                    Watch Now
                  </Button>
                </a>
              </Col>
            </Row> */}
            <Row>
              <Col>
                <h2 className='movie-description-heading mt-1 font-style-bold pb-2'>
                  You can also see
                </h2>{' '}
              </Col>
            </Row>
            <div className='row-posters'>
              {similarMovies(movie.Genres.name).map((movie) => (
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                  }}
                  id='link-style'
                  to={`/movies/${movie._id}`}
                >
                  <img
                    className='movie-carousel'
                    src={movie.imageURL}
                    alt=''
                  />
                </Link>
              ))}
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
};



















        
 


















































// ============================================ For my Reference =======================================

// import "./movie-view.scss";
// import { Col, Row, Card, Button, Container } from "react-bootstrap";
// import { Link, useParams } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
// import { BsBookmarkPlusFill, BsBookmarkPlus } from 'react-icons/bs';
// // import PropTypes from 'prop-types';
// const MovieView = ({movies, user, token, updatedUser}) => {
//     const {movieId} = useParams();
//     const movie = movies.find((movie) => movie._id === movieId);
//     console.log(movie);
//     console.log(movieId);
//     // console.log(movies);

//      //searches through the database of movies and filters out movies with the same genre and displays them but not the same movie
//   const similarMovies = (genreName) =>
//     movies.filter((movie) => movie.Genres.name == genreName && movie._id !== movieId);

//       //custom alerts when a users does an action
//   const Toast = Swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 2000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener('mouseenter', Swal.stopTimer);
//       toast.addEventListener('mouseleave', Swal.resumeTimer);
//     }
//   });

//   //state that saves favorite movies to users favorite movies array
//   const [Favorite, setFavorite] = useState(
//     user.favorite_movies.includes(movie._id)
//   );

//   //add favorite movies function for users to add movies to favorites
//   const addFavorite = () => {
//     fetch(
//       `https://user-movies-b3ba594615fa.herokuapp.com/users/${user.username}/movies/${movie._id}`,
//       {
//         method: 'POST',
//         headers: { Authorization: `Bearer ${token}` }
//       }
//     )
//       .then((response) => {
//         if (response.ok) {
//           //custom alert when user successfully adds movie to favorites
//           Toast.fire({
//             icon: 'success',
//             title: `${movie.Title} has been added to your Watchlist'`
//           });
//           return response.json();
//         } else {
//           //custom alert when response fails to add movie to favorites
//           Toast.fire({
//             icon: 'error',
//             title: `${movie.Title} could not be added to your Watchlist'`
//           });
//           return false;
//         }
//       })
//       //if movie added is successful it saves the movie to favorite state and updates the users favorites list
//       .then((user) => {
//         if (user) {
//           setFavorite(true);
//           updatedUser(user);
//         }
//       })
//       .catch((e) => {
//         alert(e);
//       });
//   };

//   //remove favorite movies function for users to remove movies to favorites
//   const removeFavorite = () => {
//     fetch(
//       `https://user-movies-b3ba594615fa.herokuapp.com/users/${user.username}/movies/${movie._id}`,
//       {
//         method: 'DELETE',
//         headers: { Authorization: `Bearer ${token}` }
//       }
//     )
//       .then((response) => {
//         if (response.ok) {
//           //custom alert when user removes adds movie to favorites
//           Toast.fire({
//             icon: 'success',
//             title: `${movie.Title} has been removed from your Watchlist'`
//           });
//           return response.json();
//         } else {
//           //custom alert when response fails to remove movie to favorites
//           Toast.fire({
//             icon: 'error',
//             title: 'something went wrong'
//           });
//           return false;
//         }
//       })
//       //if movie removed is successful it removes the movie from  the favorite movie state and updates the users favorites list
//       .then((user) => {
//         if (user) {
//           setFavorite(false);
//           updatedUser(user);
//         }
//       })
//       .catch((e) => {
//         alert(e);
//       });
//   };


//     useEffect(()=>{
//         window.scrollTo(0,0);
//     })

//         return( 

//             <>
//             <Container id='container' className='p-0 m-0'>
//               <Container fluid id='movie-view-section-top'>
//                 <div id='movie-content'>
//                   <div className='movie-details'>
//                     <Row>
//                       <Col className='col-md-9 p-0 d-flex margin-style'>
//                         <h1 className='title-style font-style-bold'>{movie.Title}</h1>
//                         {Favorite ? (
//                           <BsBookmarkPlusFill
//                             className='full-bookmark move-bookmark-mv'
//                             color='#ff6b81'
//                             size
//                             onClick={removeFavorite}
//                           />
//                         ) : (
//                           <BsBookmarkPlus
//                             className='outline-bookmark move-bookmark-mv'
//                             size
//                             onClick={addFavorite}
//                           />
//                         )}
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col>
//                         <span className='movie-stats font-style'>
//                           {movie.Release_Date} · {movie.Ratings}
//                         </span>
//                       </Col>
//                     </Row>
//                   </div>
//                   <Row>
//                     <Col id='col-remove' fluid className='col-xs-7 col-sm-3 col-md-3'>
//                       <div className='col-xs-5'>
//                         <img id='movie-image' src={movie.imageURL} alt='' />
//                       </div>
//                     </Col>
//                     {/* <Col fluid className='col-sm-9 col-md-9'>
//                       <div id='react-move' className='player-wrapper'>
//                         <ReactPlayer
//                           className='react-player'
//                           url={movie.MovieEmbed}
//                           playing={true}
//                           volume={0}
//                           controls={true}
//                           width='100%'
//                           height='100%'
//                         />
//                       </div>
//                     </Col> */}
//                   </Row>
//                 </div>
//               </Container>
//               <Container id='movie-view-section-bottom' className='p-0'>
//                 <Container
//                   className='h-100'
//                   id='movie-description-section-bottom p-0'
//                 >
//                   <Row>
//                     <Col>
//                       <h2 className='movie-description-heading mt-1 font-style-bold p-1'>
//                         Storyline
//                       </h2>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col className='mb-2 pb-3'>
//                       <span className='movie-description font-style p-0'>
//                         {movie.Description}
//                       </span>
//                     </Col>
//                   </Row>
//                   <div className='border-top'></div>
//                   <Col className='pt-2 pb-2'>
//                     <span className='movie-styles-name font-style-bold p-1'>
//                       Director{' '}
//                     </span>
//                     <span className='movie-styles-name font-style-i'>
//                       {movie.Directors.name}
//                     </span>
//                   </Col>
//                   <div className='border-top'></div>
//                   {/* <Row>
//                     <Col className='pt-2 pb-2'>
//                       <span className='movie-styles-name font-style-bold p-1'>
//                         Writers{' '}
//                       </span>
//                       <span className='movie-styles-name font-style-i'>
//                         {Movie.Writers[0]} ⋆ {Movie.Writers[1]} ⋆ {Movie.Writers[2]}
//                         {Movie.Writers[3]}
//                       </span>
//                     </Col>
//                     <div className='border-top'></div>
//                   </Row> */}
//                   <Row>
//                     <Col className='pt-2 pb-2'>
//                       <span className='movie-styles-name font-style-bold p-1'>
//                         Stars{' '}
//                       </span>
//                       <span className='movie-styles-name font-style-i'>
//                         {movie.Actors[0]} · {movie.Actors[1]} · {movie.Actors[2]}
//                         {movie.Actors[3]}
//                       </span>
//                     </Col>
//                     <div className='border-top'></div>
//                   </Row>
//                   <Row>
//                     <Col className='pt-2 pb-2'>
//                       <span className='movie-styles-name font-style-bold p-1'>
//                         Genres{' '}
//                       </span>
//                       <span className='movie-styles-name font-style-i'>
//                         {movie.Genres[0]} · {movie.Genres[1]} · {movie.Genres[2]}
//                       </span>
//                     </Col>
//                     <div className='border-top pb-3'></div>
//                   </Row>
//                   <Row>
//                     <Col className='pb-4'>
//                       <a href={movie.MovieWatch} target='blank'>
//                         <Button
//                           className='watch-button'
//                           variant='btn btn-success mt-'
//                         >
//                           Watch Now
//                         </Button>
//                       </a>
//                     </Col>
//                   </Row>
//                   <Row>
//                     <Col>
//                       <h2 className='movie-description-heading mt-1 font-style-bold pb-2'>
//                         You can also see
//                       </h2>{' '}
//                     </Col>
//                   </Row>
//                   <div className='row-posters'>
//                     {similarMovies(movie.Genres.name).map((movie) => (
//                       <Link
//                         onClick={() => {
//                           window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//                         }}
//                         id='link-style'
//                         to={`/movies/${movie._id}`}
//                       >
//                         <img
//                           className='movie-carousel'
//                           src={movie.imageURL}
//                           alt=''
//                         />
//                       </Link>
//                     ))}
//                   </div>
//                 </Container>
//               </Container>
//             </Container>
//           </>
//    );
// };

// export {MovieView} ;

// ====================================

    //    <Container>
    //         <Row>
    //             <Col>
    //             <Card className="shadow p-4 border-0">
    //                 <Row>
    //                     <Col md='4'>
    //                     <Card.Img variant="top" src={movie.imageURL} alt=""/>
    //                     </Col>
    //                      <Col>
    //                     <Card.Body>
    //                         <Card.Title className='mt-2'>{movie.Title}</Card.Title>
    //                         <Card.Text><span className="text-title">Description:  </span>{movie.Description}</Card.Text>
    //                         <Card.Text><span className="text-title">Genre:  </span>{movie.Genres}</Card.Text>
    //                         <Card.Text><span className="text-title">Director: </span>{movie.Directors}</Card.Text>
    //                         <Card.Text><span className="text-title">Actor: </span>{movie.Actors}</Card.Text>
    //                         <Card.Text><span className="text-title">Release_Date: </span>{movie.Release_Date}</Card.Text>
    //                         <Card.Text><span className="text-title">Ratings: </span>{movie.Ratings}</Card.Text>
    //                         <Card.Text><span className="text-title">Featured: </span>{movie.Featured}</Card.Text>
    //                         <Link to={`/`}>
    //                         <Button className="back-button">Back</Button>
    //                         </Link>
    //                     </Card.Body>
    //                     </Col>
    //                 </Row>
    //             </Card>
    //             </Col>
    //         </Row>
    //     </Container>
        
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

// ============================

// <>
//         <div>
//             <img  className="w-100" src={movie.imageURL}/>
//         </div>
//         <br />
//         <div>
//             <span>Title : </span>
//             <span>{movie.Title}</span>
//         </div>
//         <div>
//             <span>Description : </span>
//             <span>{movie.Description}</span>
//         </div>
//         <div>
//             <span>Genres : </span>
//             <span>{movie.Genres}</span>
//         </div>
//         <div>
//             <span>Directors : </span>
//             <span>{movie.Directors}</span>
//         </div>
//         <div>
//             <span>Actors : </span>
//                 <span>{movie.Actors}  </span>            
//         </div>
//         <div>
//             <span> Release_Date: </span>
//             <span>{movie.Release_Date}</span>
//         </div>
//         <div>
//             <span>Ratings  : </span>
//             <span>{movie.Ratings}</span>
//         </div>
//         <div>
//             <span>Featured : </span>
//             <span>{movie.Featured}</span>
//         </div>  
//         <br />
        
//         </>
