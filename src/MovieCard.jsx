import React from 'react'

const MovieCard = ({movies}) => {
  return (
    <div className="movie">
  <div>
    <p>{movies.Year}</p>

  </div>
  <div>
    <img src={movies.Poster} alt={movies.Title} />
  </div>
  <div>
    <span>
      {movies.Type}
      <h3>{movies.Title}</h3>
    </span>
  </div>
</div>
  )
}

export default MovieCard