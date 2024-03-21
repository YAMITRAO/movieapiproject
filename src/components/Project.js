
import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './MoviesList';
import './Project.css';
import AddMovie from './AddMovie';


function Project(props) {
  
 const [dummyMovies, setDummyMovies] = useState([]);
 const[isLoading , setIsLoading] = useState(false);
 const [error, setError] = useState(null);




 const fetchingMovieData =  useCallback( async ( )=> {
    setIsLoading(true);
    setError(null);

    try{
      const response = await fetch("https://moviereactapp-3a393-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json");
      if(!response.ok){
        throw new Error("Something Went wrong.....Retry")
      }
     const data = await response.json();
     let myData = [];
     for (let key in data){
      console.log(data[key])
      myData.push({
        id:key,
        title: data[key].title,
        text:data[key].text,
        releaseDate: data[key].releaseDate,
      })
     }
     console.log(myData);
     setDummyMovies(myData);

    }
    catch(error){
        
      setError(error.message);
        
    }
    setIsLoading(false)
     
   }, []);

   useEffect( () => {
    fetchingMovieData()
   }, [fetchingMovieData]);
  

   
  return (
    <React.Fragment>
      <section>
        <AddMovie/>
        <button onClick={fetchingMovieData}>Fetch Movies</button>
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
