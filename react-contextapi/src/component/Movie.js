import React from 'react'
import '../App.css';
function Movie({name,price}) {
    return (
        <div className="movie">
            <li><p> Movie Name:  {name} </p></li>
            <li><p> Price     :  {price}</p></li>
        </div>
    )
}

export default Movie
