import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';


function App() {
  
 const [dummyMovies, setDummyMovies] = useState([]);
 const[isLoading , setIsLoading] = useState(false);
 const [error, setError] = useState(null);
 const [isCalling , setIsCalling] = useState(false);

   async function ApiData ( ) {
    setIsLoading(true);
    setError(null);

    try{
      const response = await fetch("https://swapi.dev/api/film/");
      if(!response.ok){
        throw new Error("Something Went wrong.....Retry")
      }
     const data = await response.json();
     setDummyMovies(data.results);

    }
    catch(error){
      setError(error.message);
      setIsCalling(true);
    }
     setIsLoading(false)
   }

   if(isCalling){
    setTimeout( () => {
      console.log("Calling the api again and again");
      ApiData();
    }, 5000);
   }
  return (
    <React.Fragment>
      <section>
        <button onClick={ApiData}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && dummyMovies.length > 0 && <MoviesList movies={dummyMovies} />}
        {!isLoading && dummyMovies.length <= 0 && !error && <p>No Data Here</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        {isCalling && <button onClick={ () => setIsCalling(false)}>Cancle</button>}

      </section>
    </React.Fragment>
  );
}

export default App;
