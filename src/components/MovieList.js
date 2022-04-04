import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import MovieRating from './MovieRating';

function MovieList() {

    useEffect (() =>{
        fetchMovies()
    },[])
   const [movieList, setMoverList] = useState([])
   const fetchMovies = async () => {
        let headers = {"X-AUTH-TOKEN": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJ2aWV3ZXIiXSwiaWF0IjoxNjQ4OTM0NTM4LCJleHAiOjE2NDg5MzU0Mzh9.J7dL9o2LdQcVfpJNM-umXgHxz_NJx1ysYdhQPU9vtzo"};
       const data = await fetch('http://localhost:8080/api/movies' , {headers})
       const movieList = await data.json()
       setMoverList(movieList)
   } 
  return (
    
    <div >
        {movieList.map(movie => 
            <h1 key={movie._id}> 
             <Link to={`/movielist/${movie.id}`}>{movie.title} </Link>
             <MovieRating />
            </h1>
            

        )}
     
    </div>
  
    
  );
}

export default MovieList;
