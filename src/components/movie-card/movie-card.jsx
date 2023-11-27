import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsBookmarkPlusFill, BsBookmarkPlus } from 'react-icons/bs';
import './movie-card.scss';
import { API_URL } from "../../config";

 const MovieCard = ({ movie, user, token, updatedUser }) => {

  const [isFavorite, setIsFavorite] = useState(
    false
  );

  useEffect(() => {
    if (user.favorite_movies && user.favorite_movies.includes(movie._id)) {
      setIsFavorite(true);
    }
  }, [user]);

  const addFavoriteMovie = () => {
    fetch(
      `${API_URL}/users/${user.username}/movies/${movie._id}`,
      { method: "POST", headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Failed to add fav movie");
        }
      })
      .then((user) => {
        if (user) {
          alert("successfully added to favorites");
          localStorage.setItem("user", JSON.stringify(user));
          updatedUser(user);
          setIsFavorite(true);
          
        }
      })
      .catch((error) => {
        alert(error);
      });
      console.log(user);
  };

  const removeFavoriteMovie = () => {
    fetch(
      `${API_URL}/users/${user.username}/movies/${movie._id}`,
      { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
        }
      })
      .then((user) => {
        if (user) {
          alert("successfully deleted from favorites");
          localStorage.setItem("user", JSON.stringify(user));
          updatedUser(user);
          setIsFavorite(false);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  


   return ( 
<Card >
      <Card.Img variant="top" src={movie.imageURL} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        {/* <Card.Text>{movie.Description}</Card.Text> */}
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
        <Button className="close-open-btn" variant="light">See more</Button>
        </Link>
        <span>
        {isFavorite ? (
              <BsBookmarkPlusFill
                className='full-bookmark move-bookmark'
                color='#ff6b81'
                size={40}
                onClick={removeFavoriteMovie} 
              />
            ) : (
              <BsBookmarkPlus
                className='outline-bookmark move-bookmark'
                size={40}
                onClick={addFavoriteMovie}
              />
            )}
          </span>
        </Card.Body>
    </Card>
)}



MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired,
  };

export {MovieCard};











































































// =========================================for my reference ==========================
//  <Card.Body className="favorite-btns">
//         {!isFavorite ? (
//           <Button className="fav-btn" onClick={addFavoriteMovie}>+</Button>
//         ) : (
//           <Button className="fav-btn" onClick={removeFavoriteMovie}>-</Button>
//         )} 
//          <Link id='link-style' to={`/movies/${movie._id}`}>
//             <img className='movie-poster' src={movie.imageURL} alt='' />
//           </Link> 
//       </Card.Body> 


//     <div onClick={() =>{
//         onMovieClick(movie);
//     }}>{movie.Title}</div>)
// };



// import PropTypes from "prop-types";
// import { useState } from "react";
// import { Button, Card } from "react-bootstrap"; 
// import { Link } from "react-router-dom";
// // import { BsBookmarkPlusFill, BsBookmarkPlus } from 'react-icons/bs';
// import Swal from 'sweetalert2';
// const MovieCard = ({ movie, token, updatedUser, user }) =>{

//   // //custom alerts when a users does an action
//   // const Toast = Swal.mixin({
//   //   toast: true,
//   //   position: 'top-end',
//   //   showConfirmButton: false,
//   //   timer: 2000,
//   //   timerProgressBar: true,
//   //   didOpen: (toast) => {
//   //     toast.addEventListener('mouseenter', Swal.stopTimer);
//   //     toast.addEventListener('mouseleave', Swal.resumeTimer);
//   //   }
//   // });

//   // const [isFavorite, setIsFavorite] = useState(
//   //   user.favorite_movies.includes(movie._id)
//   // );

//   // //add favorite movies function for users to add movies to favorites
//   // const addFavoriteMovie = () => {
//   //   fetch(
//   //     `https://user-movies-b3ba594615fa.herokuapp.com/users/${user.username}/movies/${movie._id}`,
//   //     {
//   //       method: 'POST',
//   //       headers: { Authorization: `Bearer ${token}` }
//   //     }
//   //   )
//   //     .then((response) => {
//   //       if (response.ok) {
//   //         //custom alert when user successfully adds movie to favorites
//   //         Toast.fire({
//   //           icon: 'success',
//   //           title: `${movie.Title} has been added to your Watchlist'`
//   //         });
//   //         return response.json();
//   //       } else {
//   //         //custom alert when response fails to add movie to favorites
//   //         Toast.fire({
//   //           icon: 'error',
//   //           title: `${Movie.Title} could not be added to your favorites'`
//   //         });
//   //         return false;
//   //       }
//   //     })
//   //     //if movie added is successful it saves the movie to favorite state and updates the users favorites list
//   //     .then((user) => {
//   //       if (user) {
//   //         setIsFavorite(true);
//   //         updatedUser(user);
//   //       }
//   //     })
//   //     .catch((e) => {
//   //       alert(e);
//   //     });
//   // };

//   // //remove favorite movies function for users to remove movies to favorites
//   // const removeFavoriteMovie = () => {
//   //   fetch(
//   //     `https://user-movies-b3ba594615fa.herokuapp.com//users/${user.username}/movies/${movie._id}`,
//   //     {
//   //       method: 'DELETE',
//   //       headers: { Authorization: `Bearer ${token}` }
//   //     }
//   //   )
//   //     .then((response) => {
//   //       if (response.ok) {
//   //         //custom alert when user removes adds movie to favorites
//   //         Toast.fire({
//   //           icon: 'success',
//   //           title: `${movie.Title} has been removed from your Watchlist'`
//   //         });
//   //         return response.json();
//   //       } else {
//   //         //custom alert when response fails to remove movie to favorites
//   //         Toast.fire({
//   //           icon: 'error',
//   //           title: `${Movie.Title} could not be removed to your favorites'`
//   //         });
//   //         return false;
//   //       }
//   //     })
//   //     //if movie removed is successful it removes the movie from  the favorite movie state and updates the users favorites list
//   //     .then((user) => {
//   //       if (user) {
//   //         setIsFavorite(false);
//   //         updatedUser(user);
//   //       }
//   //     })
//   //     .catch((e) => {
//   //       alert(e);
//   //     });
//   // };
    

//   // useEffect(() => {
//   //   if (user.favorite_movies && user.favorite_movies.includes(movie._id)) {
//   //     setIsFavorite(true);
//   //   }
//   // }, [user]);

//   // const addFavoriteMovie = () => {
//   //   fetch(
//   //     `https://user-movies-b3ba594615fa.herokuapp.com/users/${user.username}/movies/${movie._id}`,
//   //     { method: "POST", headers: { Authorization: `Bearer ${token}` } }
//   //   )
//   //     .then((response) => {
//   //       if (response.ok) {
//   //         return response.json();
//   //       } else {
//   //         console.log("Failed to add fav movie");
//   //       }
//   //     })
//   //     .then((user) => {
//   //       if (user) {
//   //         alert("successfully added to favorites");
//   //         localStorage.setItem("user", JSON.stringify(user));
//   //         setUser(user);
//   //         setIsFavorite(true);
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       alert(error);
//   //     });
//   // };

//   // const removeFavoriteMovie = () => {
//   //   fetch(
//   //     `https://user-movies-b3ba594615fa.herokuapp.com/users/${user.username}/movies/${movie._id}`,
//   //     { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
//   //   )
//   //     .then((response) => {
//   //       if (response.ok) {
//   //         return response.json();
//   //       } else {
//   //         alert("Failed");
//   //       }
//   //     })
//   //     .then((user) => {
//   //       if (user) {
//   //         alert("The movie has been removed from watch list");
//   //         localStorage.setItem("user", JSON.stringify(user));
//   //         setUser(user);
//   //         setIsFavorite(false);
//   //       }
//   //     })
//   //     //if movie removed is successful it removes the movie from  the favorite movie state and updates the users favorites list
//   //     .then((user) => {
//   //       if (user) {
//   //         setIsFavorite(false);
//   //         setUser(user);
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       alert(error);
//   //     });
//   // };
