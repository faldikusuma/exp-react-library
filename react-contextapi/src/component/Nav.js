import React,{useContext} from 'react'
import '../App.css';
import logo from '../logo.svg';
import {MovieContext} from '../context/MovieContext'
function Nav() {
    const [Movies,setMovies] = useContext(MovieContext)
    return (
       
     <header className="App-header">
        
    <h1>Learn React Context Api</h1> | <p>Number Of Movie: {Movies.length}</p>
     </header>  
        
    )
}

export default Nav
