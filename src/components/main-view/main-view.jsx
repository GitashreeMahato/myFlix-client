
 import { useState , useEffect} from "react";
//  import { useState } from "react";
 import { MovieCard } from "../movie-card/movie-card";
 import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
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
                         <MovieCard movie = {movie} onMovieClick ={ (newSelectedMovie)=>{
                            setSelectedMovie(newSelectedMovie);
                         }} />
                    ))}
                </div>
                <button onClick={() => { setUser(null); setToken(null); localStorage.clear() }} >Logout</button>
                </>
            )
  };

  
  
  export {MainView};























































  // ============================ For my reference ====================================


//   {
//     movieId : "m1",
//   Title : "The Godfather",
//   Description: "The patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
//   Genres: 
//     {
//       Name :"Crime",
//       Description: "Movies in this genre explore criminal activities, their consequences, and the moral dilemmas faced by the characters.",
//     },
  
  
//   Directors:
//     {
//       Name: "Francis Ford Coppola",
//       Bio : "Francis Ford Coppola is an American film director, producer, and screenwriter. He is best known for directing the critically acclaimed 'The Godfather trilogy' and the Vietnam War epic Apocalypse Now. Coppola has won multiple Academy Awards during his career and is considered one of the most influential filmmakers in the history of cinema.",
//       DOB : "April 7, 1939",
      
//     },
  
//   Actors: [ " Marlon Brando   ", "  Al Pacino"],
//   Release_date: 1972,
//   Rating: 9.2,
//   imageURL: "https://www.themoviedb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
//   Featured: "false",
// },

// {
//       "movieId" : "m2",            
//   "Title" : "Inception",
//   "Description": "A thief, who enters people's dreams to steal their secrets, is given a final job where he must implant an idea into someone's mind.",
//   "Genres":
//     {
//       "Name" :"Science Fiction",
//       "Description": "Sci-Fi films combine futuristic or scientific concepts with intense action sequences, often set in space, the future, or with advanced technology.",
//     },
    
    
//   "Directors":
//     {
//       "Name": "Christopher Nolan",
//       "Bio" : "Christopher Nolan is a British-American film director, producer, and screenwriter known for his work on films such as 'Inception', 'The Dark Knight Trilogy', 'Interstellar, and Dunkirk. Nolan is known for his innovative storytelling and contributions to the science fiction and superhero genres.",
//       "DOB" : "July 30, 1970",
      
//     },
  
//   "Actors": [" Leonardo DiCaprio  ", "  Joseph Gordon-Levitt  ",  "    Ellen Page  " ],
//   "Release_date": 2010 ,
//   "Rating": 8.8,
//   "imageURL": "https://www.themoviedb.org/t/p/w1280/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
//   "Featured": "true",
//   },

// {
  
//       "movieId" : "m3",
//   "Title" : "The Shawshank Redemption",
//   "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
//   "Genres":
//      {
//     "Name" :"Drama",
//     "Description": "Drama films portray realistic and emotional stories focusing on the characters' personal development and life challenges.",
//   },
  
    
//   "Directors":
//     {
//       "Name": "Frank Darabont",
//       "Bio" : "Frank Darabont is an American filmmaker, screenwriter, and director. He is renowned for his work in adapting Stephen King's stories into successful films, including 'The Shawshank Redemption' and 'The Green Mile.' Darabont is known for his skill in creating emotionally powerful and character-driven narratives.",
//       "DOB" : "January 28, 1959",
      
//     },
 
//   "Actors": ["Tim Robbins", "Morgan Freeman"],
//   "Release_date": 1994 ,
//   "Rating": 9.3 ,
//   "imageURL": "https://www.themoviedb.org/t/p/w1280/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
//   "Featured": "false",
//   },
 
//     {
//       "movieId" : "m4",
//   "Title" : "The Dark Knight",
//   "Description": "When the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
//   "Genres":
//     {
//       "Name" :"Action",
//       "Description": "Action movies feature characters with extraordinary abilities who engage in thrilling action sequences, typically battling supervillains to save the world.",
//     },
  
//   "Directors":
//     {
//       "Name": "Christopher Nolan",
//       "Bio" : "Christopher Nolan is a British-American film director, producer, and screenwriter known for his work on films such as 'Inception', 'The Dark Knight Trilogy', 'Interstellar, and Dunkirk. Nolan is known for his innovative storytelling and contributions to the science fiction and superhero genres.",
//       "DOB" : "July 30, 1970",
//     },

//   "Actors": [ "Christian Bale   ", "   Heath Ledger" ],
//   "Release_date": 2008 ,
//   "Rating": 9.0 ,
//   "imageURL": "https://www.themoviedb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//   "Featured": "true",
//   },

//   {   
//       "movieId" : "m5",
//   "Title" : "Forrest Gump",
//   "Description": "Through three decades of U.S. history, a man with a low IQ witnesses and unwittingly influences several defining historical events in the 20th century United States.",
//   "Genres":
    
//     {
//       "Name" :"Romance",
//       "Description": "Romance films incorporate song and dance numbers to tell romantic stories, where music and choreography play a significant role in the narrative",
//     },
  
//   "Directors":
//     {
//       "Name": "Robert Zemeckis",
//       "Bio" : "Robert Zemeckis is an American filmmaker, screenwriter, and producer. He is famous for directing and co-writing the 'Back to the Future' trilogy, 'Forrest Gump,' 'Cast Away,' and 'Who Framed Roger Rabbit.' Zemeckis is known for his innovative use of visual effects and storytelling techniques in his films.",
//       "DOB" : "May 14, 1951",
      
//     },

//   "Actors": ["Tom Hanks   ", "   Robin WrightT" ],
//   "Release_date": 1994,
//   "Rating": 8.8,
//   "imageURL": "https://static.kino.de/wp-content/uploads/2019/10/forrest-gump-1994-filmplakat.jpg",
//   "Featured": "false"
//   },






















































  // ============================ For my reference ====================================


//   {
//     movieId : "m1",
//   Title : "The Godfather",
//   Description: "The patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
//   Genres: 
//     {
//       Name :"Crime",
//       Description: "Movies in this genre explore criminal activities, their consequences, and the moral dilemmas faced by the characters.",
//     },
  
  
//   Directors:
//     {
//       Name: "Francis Ford Coppola",
//       Bio : "Francis Ford Coppola is an American film director, producer, and screenwriter. He is best known for directing the critically acclaimed 'The Godfather trilogy' and the Vietnam War epic Apocalypse Now. Coppola has won multiple Academy Awards during his career and is considered one of the most influential filmmakers in the history of cinema.",
//       DOB : "April 7, 1939",
      
//     },
  
//   Actors: [ " Marlon Brando   ", "  Al Pacino"],
//   Release_date: 1972,
//   Rating: 9.2,
//   imageURL: "https://www.themoviedb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
//   Featured: "false",
// },

// {
//       "movieId" : "m2",            
//   "Title" : "Inception",
//   "Description": "A thief, who enters people's dreams to steal their secrets, is given a final job where he must implant an idea into someone's mind.",
//   "Genres":
//     {
//       "Name" :"Science Fiction",
//       "Description": "Sci-Fi films combine futuristic or scientific concepts with intense action sequences, often set in space, the future, or with advanced technology.",
//     },
    
    
//   "Directors":
//     {
//       "Name": "Christopher Nolan",
//       "Bio" : "Christopher Nolan is a British-American film director, producer, and screenwriter known for his work on films such as 'Inception', 'The Dark Knight Trilogy', 'Interstellar, and Dunkirk. Nolan is known for his innovative storytelling and contributions to the science fiction and superhero genres.",
//       "DOB" : "July 30, 1970",
      
//     },
  
//   "Actors": [" Leonardo DiCaprio  ", "  Joseph Gordon-Levitt  ",  "    Ellen Page  " ],
//   "Release_date": 2010 ,
//   "Rating": 8.8,
//   "imageURL": "https://www.themoviedb.org/t/p/w1280/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg",
//   "Featured": "true",
//   },

// {
  
//       "movieId" : "m3",
//   "Title" : "The Shawshank Redemption",
//   "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
//   "Genres":
//      {
//     "Name" :"Drama",
//     "Description": "Drama films portray realistic and emotional stories focusing on the characters' personal development and life challenges.",
//   },
  
    
//   "Directors":
//     {
//       "Name": "Frank Darabont",
//       "Bio" : "Frank Darabont is an American filmmaker, screenwriter, and director. He is renowned for his work in adapting Stephen King's stories into successful films, including 'The Shawshank Redemption' and 'The Green Mile.' Darabont is known for his skill in creating emotionally powerful and character-driven narratives.",
//       "DOB" : "January 28, 1959",
      
//     },
 
//   "Actors": ["Tim Robbins", "Morgan Freeman"],
//   "Release_date": 1994 ,
//   "Rating": 9.3 ,
//   "imageURL": "https://www.themoviedb.org/t/p/w1280/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
//   "Featured": "false",
//   },
 
//     {
//       "movieId" : "m4",
//   "Title" : "The Dark Knight",
//   "Description": "When the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
//   "Genres":
//     {
//       "Name" :"Action",
//       "Description": "Action movies feature characters with extraordinary abilities who engage in thrilling action sequences, typically battling supervillains to save the world.",
//     },
  
//   "Directors":
//     {
//       "Name": "Christopher Nolan",
//       "Bio" : "Christopher Nolan is a British-American film director, producer, and screenwriter known for his work on films such as 'Inception', 'The Dark Knight Trilogy', 'Interstellar, and Dunkirk. Nolan is known for his innovative storytelling and contributions to the science fiction and superhero genres.",
//       "DOB" : "July 30, 1970",
//     },

//   "Actors": [ "Christian Bale   ", "   Heath Ledger" ],
//   "Release_date": 2008 ,
//   "Rating": 9.0 ,
//   "imageURL": "https://www.themoviedb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//   "Featured": "true",
//   },

//   {   
//       "movieId" : "m5",
//   "Title" : "Forrest Gump",
//   "Description": "Through three decades of U.S. history, a man with a low IQ witnesses and unwittingly influences several defining historical events in the 20th century United States.",
//   "Genres":
    
//     {
//       "Name" :"Romance",
//       "Description": "Romance films incorporate song and dance numbers to tell romantic stories, where music and choreography play a significant role in the narrative",
//     },
  
//   "Directors":
//     {
//       "Name": "Robert Zemeckis",
//       "Bio" : "Robert Zemeckis is an American filmmaker, screenwriter, and producer. He is famous for directing and co-writing the 'Back to the Future' trilogy, 'Forrest Gump,' 'Cast Away,' and 'Who Framed Roger Rabbit.' Zemeckis is known for his innovative use of visual effects and storytelling techniques in his films.",
//       "DOB" : "May 14, 1951",
      
//     },

//   "Actors": ["Tom Hanks   ", "   Robin WrightT" ],
//   "Release_date": 1994,
//   "Rating": 8.8,
//   "imageURL": "https://static.kino.de/wp-content/uploads/2019/10/forrest-gump-1994-filmplakat.jpg",
//   "Featured": "false"
//   },