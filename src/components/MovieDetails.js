import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router'

function MovieDetails( props) {
 const {id } = useParams()

    useEffect (() =>{
        fetchMovieDetails()
        console.log(id)
    },[])
   const [movieDetails, setMovieDetails] = useState([])
   const fetchMovieDetails = async () => {
       let headers = {"X-AUTH-TOKEN": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJ2aWV3ZXIiXSwiaWF0IjoxNjQ4OTM0NTM4LCJleHAiOjE2NDg5MzU0Mzh9.J7dL9o2LdQcVfpJNM-umXgHxz_NJx1ysYdhQPU9vtzo"};
       const data = await fetch(`http://localhost:8080/api/movies/${id}`,{headers})
       const movieDetails = await data.json()
       setMovieDetails(movieDetails)
   } 
  return (
    
    <div >
       <h1> {movieDetails.title}</h1>
      
    </div>
  
    
  );
}

export default MovieDetails;
