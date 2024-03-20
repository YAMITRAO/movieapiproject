import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';


function App() {
  
 const [dummyMovies, setDummyMovies] = useState([]);
 const[isLoading , setIsLoading] = useState(false);
  // const ApiData = () => {
  //   fetch("https://swapi.dev/api/films/").then( (response) => {
  //    return response.json()
  //   }).then( (data) => { console.log(data.results)
  //      setDummyMovies(data.results)});
  // }
   async function ApiData ( ) {
    setIsLoading(true);
     const response = await fetch("https://swapi.dev/api/films/");
     const data = await response.json();
     setDummyMovies(data.results);
     setIsLoading(false)
   }
  return (
    <React.Fragment>
      <section>
        <button onClick={ApiData}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && dummyMovies.length > 0 && <MoviesList movies={dummyMovies} />}
        {!isLoading && dummyMovies.length <= 0 && <p>No Data Here</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
