import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';


function App() {
  
 const [dummyMovies, setDummyMovies] = useState([]);
  const ApiData = () => {
    fetch("https://swapi.dev/api/films/").then( (response) => {
     return response.json()
    }).then( (data) => { console.log(data.results)
       setDummyMovies(data.results)});
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={ApiData}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
