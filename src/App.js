import React, { useState, useEffect } from 'react';
import Movies from './Components/Movies';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ffa33be0ffbd4264599107c3f8f30b33&page=1";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API).then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });

  }, [])

  return (
    <>
      <NavBar setMovies={setMovies}/>
      <div className="movieContainer">
        {movies.length > 0 && movies.map((movie) =>
          <Movies key={movie.id} {...movie} />
        )}
      </div>
    </>
  )
}

export default App;
