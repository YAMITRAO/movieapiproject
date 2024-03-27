import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  const deleteHandler = async(e) => {
    console.log(e.target.value);
    let url = `https://moviereactapp-3a393-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${e.target.value}.json`
   const response = await fetch(url , {
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
  });
  let data = await response.json();
  console.log(data);
}
  return (
    <li key={props.id} className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.text}</p>
      <button className={classes.button} value={props.id} onClick={ deleteHandler}>Delete</button>
    </li>
  );
};

export default Movie;
