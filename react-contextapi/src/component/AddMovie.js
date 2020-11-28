import React,{useState,useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {MovieContext} from '../context/MovieContext'

function AddMovie() {
    const [name,setname] = useState('')
    const [price,setprice] = useState('')
    const [Movies,setMovies] = useContext(MovieContext)
    const updateName =(e) =>{
        setname(e.target.value)
    }
    const updatePrice =(e) =>{
        setprice(e.target.value)
    }
    const updateMovie = (e) => {
        e.preventDefault()
        setMovies(prevMovies => [...prevMovies,{name:name,price:price,id:uuidv4() }])
        setname('')
        setprice('')
    }
    const form = {
        width:' 90%',
        margin: '25px auto',
        display:' flex'
    }
    return (
        <div style={form}>
           <form onSubmit={updateMovie}>
            <label>Name Movie</label>
            <input type="text" name="name" value={name} onChange={updateName} />
            <label>Price Movie</label>
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>submit</button>
         </form>         
        </div>
    )
    
}

export default AddMovie
