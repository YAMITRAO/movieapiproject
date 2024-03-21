
import React, { useEffect, useState } from 'react';
import MoviesList from './MoviesList';
import './Project.css';


function Project(props) {
  
 const [dummyMovies, setDummyMovies] = useState([]);
 const[isLoading , setIsLoading] = useState(false);
 const [error, setError] = useState(null);


 useEffect( async () => {
  setIsLoading(true);
    setError(null);

    try{
      const response = await fetch("https://swapi.dev/api/films/");
      if(!response.ok){
        throw new Error("Something Went wrong.....Retry")
      }
     const data = await response.json();
     setDummyMovies(data.results);
    }
    catch(error){
      setError(error.message);
    }
    setIsLoading(false)
 }, []);

   async function ApiData ( ) {
    setIsLoading(true);
    setError(null);

    try{
      const response = await fetch("https://swapi.dev/api/films/");
      if(!response.ok){
        throw new Error("Something Went wrong.....Retry")
      }
     const data = await response.json();
     setDummyMovies(data.results);

    }
    catch(error){
        
      setError(error.message);
        setTimeout( () => {
          console.log("Calling the api again and again");
          ApiData();
          setIsLoading(false)
        }, 5000);
    }
    setIsLoading(false)
     
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
      </section>
    </React.Fragment>
  );
}

export default Project;
