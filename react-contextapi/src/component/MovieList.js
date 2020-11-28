import React,{useContext} from 'react'
import Movie from './Movie'
import {MovieContext} from '../context/MovieContext'
import '../App.css';
const  MovieList = () => {
    const [Movies,setMovies] = useContext(MovieContext)
    return (
        <div className="movie-list">
            { Movies.map(movie => (
               <Movie name={movie.name} key={movie.id} price={movie.price} />
               
            ))}
        </div>
    )
}

export default MovieList