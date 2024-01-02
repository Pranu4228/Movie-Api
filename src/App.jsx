import { useEffect, useState } from 'react';
import './App.css';
import seacrhIcon from "./assets/search.svg";
import MovieCard from "./MovieCard.jsx";

const API_URL = 'http://www.omdbapi.com?apikey=657deb92'

const movies =
  {
    "Title": "Avatar",
    "Year": "2009",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
}

function App() {
  const [movie,setMovies] =useState([]);
  const [searchTerm, setSearchTrem] = useState('');
  const searchMovies =async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }
  useEffect(()=>{
    searchMovies('Avatar')
  },[])

  return (
    <div className="App">
      <b><span>MO</span>VI<span>ES</span>&ensp;H<span>U</span>B</b>
<div className="search">
  <input type="text" placeholder='search for movies'  value={searchTerm} onChange={(e) => setSearchTrem(e.target.value)} />

  <img src={seacrhIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
</div>
{movie?. length > 0 
? (
<div className="container">
  {movie.map((movies) =>(
    <MovieCard movies={movies}/>
  ))}
</div>
):(
  <div className="empty">
    <h2>No Movies found</h2>
  </div>
)}
<div className="footer">
  <p>Made by Pranesh</p>
</div>
    </div>
  
  )
}

export default App