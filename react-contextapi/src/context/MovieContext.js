import React,{useState,createContext} from 'react'

export const  MovieContext   = createContext()
export const  MovieProvider = (props) => {
    const [Movies, setMovies] = useState([
        {
            name: 'The Dark Knight',
            price: '$9',
            id:'F345'
        },
        {
            name: 'Batman Begin',
            price: '$9',
            id:'F346'
        },
        {
            name: 'The Dark Knight Rises',
            price: '$9',
            id:'F347'
        }
    ])
    return (
       <MovieContext.Provider value={[Movies,setMovies]}>
           {props.children}
       </MovieContext.Provider>
    )
}


