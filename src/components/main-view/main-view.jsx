
import { useState , useEffect} from "react";
 import { MovieCard } from "../movie-card/movie-card";
 import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
// import {SignUp }}
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar"; 
import { ProfileView } from "../profile-view/profile-view";
import { MyList } from "../myList/myList";
import { UpdateUser } from "../profile-view/update-user";
import { Col, Row, Container} from "react-bootstrap";
import navLogo from "../images/logo-no-background.svg"
import { SearchView } from "../search-view/search-view";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";



  const MainView = () => {

    //keeps stored information for user with localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");

     //state put movies from API into an array
    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(storedUser? storedUser:null);

    //keeps track of tokens once a user logs in and stores it in storedToken state
    const [token, setToken] = useState(storedToken? storedToken:null);
    // const [searchInput] = useState('');

      //updates users state by taking users actions and putting them in setUser and then updating the new information to the users state
  const updatedUser = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleSearch = (search) => {
		const filteredMovies = movies.filter((movie) =>
			movie.Title.toLowerCase().includes(search.toLowerCase())
		);

		setMovies(filteredMovies);
	};
     //logic to search movies by genre
  // const comedySearch = movies.filter((movie) => movie.Genres.name === 'Comedy');
  // const romanceSearch = movies.filter((movie) => movie.Genre.name === 'Romance');
  // const actionSearch = movies.filter((movie) => movie.Genres.name === 'Action');
  // const dramaSearch = movies.filter((movie) => movie.Genres.name === 'Drama');
  // const scifiSearch = movies.filter((movie) => movie.Genres.name === 'Sci-Fi');
  // const horrorSearch = movies.filter((movie) => movie.Genres.name === 'Horror');
  // const thrillerSearch = movies.filter((movie) => movie.Genres.name === 'Thriller');

   //checks to see if user has token if not they it should'nt return main-view
    useEffect(()=>{
      if (!token) {
        return;
      }
  
      //fetch for movies data from backend API
      fetch("https://user-movies-b3ba594615fa.herokuapp.com/movies", {headers:{Authorization: `Bearer ${token}`}})
      .then((response)=> response.json())
      .then((data)=>{
        console.log("Movies from API :" , data);
        const movieFromApi = data.map((movie)=>{
          return{
            _id: movie._id,
            Title: movie.Title,
            imageURL: movie.imageURL,
            Description: movie.Description,
            Genres: movie.Genres,
            Directors: movie.Directors,
            Actors: movie.Actors,
            Release_Date: movie.Release_Date,
            Ratings: movie.Ratings,
            Featured: movie.Featured.toString(),

            // Genres: {
            //   name: movie.Genres.name
            // },
            // Directors: {
            //   name: movie.Directors.name
            // },

          };
        });
        setMovies(movieFromApi);
        
      })
      
    }, [token]);
    
    return(

    <BrowserRouter>
    {!user ? (
        <Container>
          <Col className='d-flex justify-content-left'>
            <img id='logo' src={navLogo} alt='myFlix logo' />
          </Col>
        </Container>
      ) : (
        <NavigationBar
          user={user}
          token={token}
          setUser={setUser}
          setToken={setToken}
          movie={movies}
        />
      )}

        <Container>
       <Row className="justify-content-md-center">
        <Routes>
        <Route path="/signup"
        element={
          <>
          {user ? (<Navigate to="/" /> ):(<Col className='d-flex justify-content-center'><SignupView /></Col>)}
          </>
        }
        />

        <Route
        path="/login"
        element={
          <>
          {user ? (<Navigate to="/" />):(<Col md={5} className='d-flex justify-content-center'>
            <LoginView onLoggedIn={(user, token) => {
            setUser(user); 
            setToken(token);
            // localStorage.setItem('user', user);
            // localStorage.setItem('token', token);
            }} /></Col>)}
          </>
        }
        />

      

        <Route
        path="/movies/:movieId"
      
        element={
          <>
          {!user ? (<Navigate to="/login" replace />): movies.length === 0 ? (<Col>The list is empty!</Col>):
        (<Col className="m-4 justify-content-md-center" md={10}>
              <MovieView
               movies={movies} 
              key={movies._id}
              user={user}
              // token={token}
              // movie={movies}
              updatedUser={updatedUser}
              />
          </Col>)}
          </>
        }
        />
        
        
      <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col>
                    <Row>
                    <Col>
                  <SearchView onSearch={handleSearch} />
                  </Col>
              </Row>

                    <Row>
                      {movies.map((movie) =>(
                        <Col className="mb-4" key={movie._id} md={3}>
                          <MovieCard 
                          movie={movie}  
                          user={user} 
                          token={token} 
                          updatedUser={updatedUser}
                          />
                        </Col>
                      ))
                      }
                    </Row>
                  </Col>
                )}
              </>
            }
          />


<Route
              path='/profile'
              element={
                <>
                  {user ? (
                    <Col>
                      <h2 className='movie-featured-heading mt-2 font-style-bold'>
                        {user.username} s' profile
                      </h2>
                      <ProfileView
                        loggedOut={() => {
                          setUser(null);
                          setMovies(null);
                          localStorage.clear();
                        }}
                        user={user}
                        token={token}
                        movie={movies}
                        updatedUser={updatedUser}
                      />
                    </Col>
                  ) : (
                    <Navigate to='/login' replace />
                  )}
                </>
              }
            />

      <Route
              path='/users/:username'
              element={
                <>
                  {user ? (
                    <Col>
                      <Navigate to='/users/updateInfo' />
                      <UpdateUser
                        user={user}
                        token={token}
                        updatedUser={updatedUser}
                      />
                    </Col>
                  ) : (
                    <Navigate to='/login' replace />
                  )}
                </>
              }
            />

<Route
              path='/myList/favorites'
              element={
                <>
                  {user ? (
                    <Row>
                      <Col>
                        <h2 className='movie-featured-heading mt-2 font-style-bold'>
                          MyList Movies
                        </h2>
                        <MyList
                          user={user}
                          token={token}
                          movie={movies}
                          updatedUser={updatedUser}
                        />
                       
                      </Col>
                    </Row>
                  ) : (
                    <Navigate to='/login' replace />
                  )}
                </>
              }
            />

        </Routes>
        </Row>
        </Container>
        </BrowserRouter>


              
                )
              };
   
  export {MainView};


























































  // for my reference
// =================================== 3.7 ========================

// MOVIE CARD


 /* <Route
                path="/"
                element={
                  <>
                    {!user ? (
                      <Navigate to="/login" replace />
                    ) : movies.length === 0 ? (
                      <Col>The list is empty!</Col>
                    ) : (
                      <>
                        {movies.map((movie) => (
                          <Col className="mb-4" key={movie.id} md={3}>
                            <MovieCard movie={movie} />
                          </Col>
                        ))}
                      </>
                    )}
                  </>
                }
              />

  ================================ 3.6 ====================================

<Row className="justify-content-md-center">
                  {!user ? (
                    
                    <Col md={5}>
                      <LoginView onLoggedIn={(user) => setUser(user)} />
                      or
                      <SignupView />
                      </Col>
                    
                    ): selectedMovie ?( 
                      <Col md={8} style={{ border: "1px solid"}}>
                    <MovieView style={{ border: "1px solid"}} movie={selectedMovie} onBackClick={()=>setSelectedMovie(null)} 
                    />
                    </Col>
                    ):movies.length === 0 ? (
                    <div>The list is empty</div>
                    ): (
                      <>
                      {movies.map((movie)=>(
                      
                        <Col key={movie.id} md={3} className="mb-5">
                                 <MovieCard movie = {movie} onMovieClick ={ (newSelectedMovie)=>{
                                 
                                    setSelectedMovie(newSelectedMovie);
                                 }}
                                 />
                                 </Col>
                      ))}
                      <Button className="btn-logout col-md-1 mb-4" onClick={() => { setUser(null); setToken(null); localStorage.clear() }} >Logout</Button>
                      </>
                    )}
                  </Row>


  return(
              <Row className="justify-content-md-center">
                  {!user ? (
                    
                    <Col md={5}>
                      <LoginView onLoggedIn={(user) => setUser(user)} />
                      or
                      <SignupView />
                      </Col>
                    
                    ): selectedMovie ?( 
                      <Col md={8} style={{ border: "1px solid"}}>
                    <MovieView style={{ border: "1px solid"}} movie={selectedMovie} onBackClick={()=>setSelectedMovie(null)} 
                    />
                    </Col>
                    ):movies.length === 0 ? (
                    <div>The list is empty</div>
                    ): (
                      <>
                      {movies.map((movie)=>(
                      
                        <Col key={movie.id} md={3} className="mb-5">
                                 <MovieCard movie = {movie} onMovieClick ={ (newSelectedMovie)=>{
                                 
                                    setSelectedMovie(newSelectedMovie);
                                 }}
                                 />
                                 </Col>
                      ))}
                      <Button className="btn-logout col-md-1 mb-4" onClick={() => { setUser(null); setToken(null); localStorage.clear() }} >Logout</Button>
                      </>
                    )}
                  </Row>
                )
              };

  =================================

  const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(storedUser? storedUser:null);
    const [token, setToken] = useState(storedToken? storedToken:null);
    useEffect(()=>{
      if (!token) {
        return;
      }
  
      fetch("https://user-movies-b3ba594615fa.herokuapp.com/movies", {headers:{Authorization: `Bearer ${token}`}})
      .then((response)=> response.json())
      .then((data)=>{
        console.log("Movies from API :" , data);
        const movieFromApi = data.map((movie)=>{
          return{
            id: movie._id,
            Title: movie.Title,
            ImageURL: movie.imageURL,
            Description: movie.Description,
            Genres: movie._id,
            Directors: movie._id,
            Actors: movie._id,
            Release_date: movie.Release_date,
            Rating: movie.Rating,
            Featured: movie.Featured.toString()

          };
        });
        setMovies(movieFromApi);
      })
      
    }, [token]);
    
    if (!user) {
      return (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        or
        <SignupView />
      </>
      );
    }
  

    if(selectedMovie){
      return <MovieView movie={selectedMovie} onBackClick={()=>{setSelectedMovie(null)}} />

    }

    if(movies.length === 0){
      return <div>The list is empty</div>
    }
      return(
        <>
          <div>
             
              {movies.map((movie)=>(
                   <MovieCard movie = {movie} onMovieClick ={ (newSelectedMovie)=>{
                   
                      setSelectedMovie(newSelectedMovie);
                   }} />
              ))}
          </div>
          <button onClick={() => { setUser(null); setToken(null); localStorage.clear() }} >Logout</button>
          </>
      )
};
















































  ============================ For my reference ====================================


  {
    movieId : "m1",
  Title : "The Godfather",
  Description: "The patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  Genres: 
    {
      Name :"Crime",
      Description: "Movies in this genre explore criminal activities, their consequences, and the moral dilemmas faced by the characters.",
    },
  
  
  Directors:
    {
      Name: "Francis Ford Coppola",
      Bio : "Francis Ford Coppola is an American film director, producer, and screenwriter. He is best known for directing the critically acclaimed 'The Godfather trilogy' and the Vietnam War epic Apocalypse Now. Coppola has won multiple Academy Awards during his career and is considered one of the most influential filmmakers in the history of cinema.",
      DOB : "April 7, 1939",
      
    },
  
  Actors: [ " Marlon Brando   ", "  Al Pacino"],
  Release_date: 1972,
  Rating: 9.2,
  imageURL: "https://www.themoviedb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  Featured: "false",
},

{
      "movieId" : "m2",            
  "Title" : "Inception",
  "Description": "A thief, who enters people's dreams to steal their secrets, is given a final job where he must implant an idea into someone's mind.",
  "Genres":
    {
      "Name" :"Science Fiction",
      "Description": "Sci-Fi films combine futuristic or scientific concepts with intense action sequences, often set in space, the future, or with advanced technology.",
    },
    
    
  "Directors":
    {
      "Name": "Christopher Nolan",
      "Bio" : "Christopher Nolan is a British-American film director, producer, and screenwriter known for his work on films such as 'Inception', 'The Dark Knight Trilogy', 'Interstellar, and Dunkirk. Nolan is known for his innovative storytelling and contributions to the science fiction and superhero genres.",
      "DOB" : "July 30, 1970",
      
    },
  
  "Actors": [" Leonardo DiCaprio  ", "  Joseph Gordon-Levitt  ",  "    Ellen Page  " ],
  "Release_date": 2010 ,
  "Rating": 8.8,
  "imageURL": "https://www.themoviedb.org/t/p/w1280/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
  "Featured": "true",
  },

{
  
      "movieId" : "m3",
  "Title" : "The Shawshank Redemption",
  "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  "Genres":
     {
    "Name" :"Drama",
    "Description": "Drama films portray realistic and emotional stories focusing on the characters' personal development and life challenges.",
  },
  
    
  "Directors":
    {
      "Name": "Frank Darabont",
      "Bio" : "Frank Darabont is an American filmmaker, screenwriter, and director. He is renowned for his work in adapting Stephen King's stories into successful films, including 'The Shawshank Redemption' and 'The Green Mile.' Darabont is known for his skill in creating emotionally powerful and character-driven narratives.",
      "DOB" : "January 28, 1959",
      
    },
 
  "Actors": ["Tim Robbins", "Morgan Freeman"],
  "Release_date": 1994 ,
  "Rating": 9.3 ,
  "imageURL": "https://www.themoviedb.org/t/p/w1280/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
  "Featured": "false",
  },
 
    {
      "movieId" : "m4",
  "Title" : "The Dark Knight",
  "Description": "When the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  "Genres":
    {
      "Name" :"Action",
      "Description": "Action movies feature characters with extraordinary abilities who engage in thrilling action sequences, typically battling supervillains to save the world.",
    },
  
  "Directors":
    {
      "Name": "Christopher Nolan",
      "Bio" : "Christopher Nolan is a British-American film director, producer, and screenwriter known for his work on films such as 'Inception', 'The Dark Knight Trilogy', 'Interstellar, and Dunkirk. Nolan is known for his innovative storytelling and contributions to the science fiction and superhero genres.",
      "DOB" : "July 30, 1970",
    },

  "Actors": [ "Christian Bale   ", "   Heath Ledger" ],
  "Release_date": 2008 ,
  "Rating": 9.0 ,
  "imageURL": "https://www.themoviedb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  "Featured": "true",
  },

  {   
      "movieId" : "m5",
  "Title" : "Forrest Gump",
  "Description": "Through three decades of U.S. history, a man with a low IQ witnesses and unwittingly influences several defining historical events in the 20th century United States.",
  "Genres":
    
    {
      "Name" :"Romance",
      "Description": "Romance films incorporate song and dance numbers to tell romantic stories, where music and choreography play a significant role in the narrative",
    },
  
  "Directors":
    {
      "Name": "Robert Zemeckis",
      "Bio" : "Robert Zemeckis is an American filmmaker, screenwriter, and producer. He is famous for directing and co-writing the 'Back to the Future' trilogy, 'Forrest Gump,' 'Cast Away,' and 'Who Framed Roger Rabbit.' Zemeckis is known for his innovative use of visual effects and storytelling techniques in his films.",
      "DOB" : "May 14, 1951",
      
    },

  "Actors": ["Tom Hanks   ", "   Robin WrightT" ],
  "Release_date": 1994,
  "Rating": 8.8,
  "imageURL": "https://static.kino.de/wp-content/uploads/2019/10/forrest-gump-1994-filmplakat.jpg",
  "Featured": "false"
  },






















































  ============================ For my reference ====================================


  {
    movieId : "m1",
  Title : "The Godfather",
  Description: "The patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  Genres: 
    {
      Name :"Crime",
      Description: "Movies in this genre explore criminal activities, their consequences, and the moral dilemmas faced by the characters.",
    },
  
  
  Directors:
    {
      Name: "Francis Ford Coppola",
      Bio : "Francis Ford Coppola is an American film director, producer, and screenwriter. He is best known for directing the critically acclaimed 'The Godfather trilogy' and the Vietnam War epic Apocalypse Now. Coppola has won multiple Academy Awards during his career and is considered one of the most influential filmmakers in the history of cinema.",
      DOB : "April 7, 1939",
      
    },
  
  Actors: [ " Marlon Brando   ", "  Al Pacino"],
  Release_date: 1972,
  Rating: 9.2,
  imageURL: "https://www.themoviedb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  Featured: "false",
},

{
      "movieId" : "m2",            
  "Title" : "Inception",
  "Description": "A thief, who enters people's dreams to steal their secrets, is given a final job where he must implant an idea into someone's mind.",
  "Genres":
    {
      "Name" :"Science Fiction",
      "Description": "Sci-Fi films combine futuristic or scientific concepts with intense action sequences, often set in space, the future, or with advanced technology.",
    },
    
    
  "Directors":
    {
      "Name": "Christopher Nolan",
      "Bio" : "Christopher Nolan is a British-American film director, producer, and screenwriter known for his work on films such as 'Inception', 'The Dark Knight Trilogy', 'Interstellar, and Dunkirk. Nolan is known for his innovative storytelling and contributions to the science fiction and superhero genres.",
      "DOB" : "July 30, 1970",
      
    },
  
  "Actors": [" Leonardo DiCaprio  ", "  Joseph Gordon-Levitt  ",  "    Ellen Page  " ],
  "Release_date": 2010 ,
  "Rating": 8.8,
  "imageURL": "https://www.themoviedb.org/t/p/w1280/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
  "Featured": "true",
  },

{
  
      "movieId" : "m3",
  "Title" : "The Shawshank Redemption",
  "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  "Genres":
     {
    "Name" :"Drama",
    "Description": "Drama films portray realistic and emotional stories focusing on the characters' personal development and life challenges.",
  },
  
    
  "Directors":
    {
      "Name": "Frank Darabont",
      "Bio" : "Frank Darabont is an American filmmaker, screenwriter, and director. He is renowned for his work in adapting Stephen King's stories into successful films, including 'The Shawshank Redemption' and 'The Green Mile.' Darabont is known for his skill in creating emotionally powerful and character-driven narratives.",
      "DOB" : "January 28, 1959",
      
    },
 
  "Actors": ["Tim Robbins", "Morgan Freeman"],
  "Release_date": 1994 ,
  "Rating": 9.3 ,
  "imageURL": "https://www.themoviedb.org/t/p/w1280/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
  "Featured": "false",
  },
 
    {
      "movieId" : "m4",
  "Title" : "The Dark Knight",
  "Description": "When the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  "Genres":
    {
      "Name" :"Action",
      "Description": "Action movies feature characters with extraordinary abilities who engage in thrilling action sequences, typically battling supervillains to save the world.",
    },
  
  "Directors":
    {
      "Name": "Christopher Nolan",
      "Bio" : "Christopher Nolan is a British-American film director, producer, and screenwriter known for his work on films such as 'Inception', 'The Dark Knight Trilogy', 'Interstellar, and Dunkirk. Nolan is known for his innovative storytelling and contributions to the science fiction and superhero genres.",
      "DOB" : "July 30, 1970",
    },

  "Actors": [ "Christian Bale   ", "   Heath Ledger" ],
  "Release_date": 2008 ,
  "Rating": 9.0 ,
  "imageURL": "https://www.themoviedb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  "Featured": "true",
  },

  {   
      "movieId" : "m5",
  "Title" : "Forrest Gump",
  "Description": "Through three decades of U.S. history, a man with a low IQ witnesses and unwittingly influences several defining historical events in the 20th century United States.",
  "Genres":
    
    {
      "Name" :"Romance",
      "Description": "Romance films incorporate song and dance numbers to tell romantic stories, where music and choreography play a significant role in the narrative",
    },
  
  "Directors":
    {
      "Name": "Robert Zemeckis",
      "Bio" : "Robert Zemeckis is an American filmmaker, screenwriter, and producer. He is famous for directing and co-writing the 'Back to the Future' trilogy, 'Forrest Gump,' 'Cast Away,' and 'Who Framed Roger Rabbit.' Zemeckis is known for his innovative use of visual effects and storytelling techniques in his films.",
      "DOB" : "May 14, 1951",
      
    },

  "Actors": ["Tom Hanks   ", "   Robin WrightT" ],
  "Release_date": 1994,
  "Rating": 8.8,
  "imageURL": "https://static.kino.de/wp-content/uploads/2019/10/forrest-gump-1994-filmplakat.jpg",
  "Featured": "false"
               }*/