import React, { useRef } from 'react'
import style from "./AddMovie.module.css"

const AddMovie = () => {
    const titleRef = useRef(" ");
    const textRef = useRef(" ");
    const dateRef = useRef(" ");

    const postMovieData = (e) => {
        e.preventDefault();
        let data = {
            title: titleRef.current.value,
            text: textRef.current.value,
            releaseDate: dateRef.current.value
        }
        fetch('https://moviereactapp-3a393-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', {
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        }).then( (response) => { return response.json()}).then( (data) => {console.log(data)})
        console.log(data);
    }
  return (
    <div className={style.formContainer}>
    <form onSubmit={ postMovieData }>
        <div className={style.inputContainer}>
        <label>Title</label>
        <input type="text" placeholder='enter title of movie' ref={titleRef}/>
        </div>

        <div className={style.inputContainer}>
        <label>Text Of movie</label>
        <input type="text" placeholder='enter about the movie' ref={textRef}/>
        </div>

        <div className={style.inputContainer}>
            <label>Date of Release</label>
        <input type="date" placeholder='Select the date' ref={dateRef}/>
        </div>

        <div> <button type="submit" >Add</button></div>
        
       
        
       
    </form>
    </div>
  )
}

export default AddMovie