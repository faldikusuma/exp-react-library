import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

function Shop() {
    useEffect(()=>{
        fecthItems();
    },[])
   const [items,setItems] = useState([])
   const fecthItems = async () => {
       const data = await fetch('https://fortniteapi.io/v1/items/upcoming?lang=en',{
           "headers" :{
               "Authorization":"c232a097-bf031289-cdb50bb3-54888349"
           }
       })
       const items = await data.json();
       console.log(items.items);
       setItems(items.items)
   }

    return (
        
       <div>
           {
               items.map((item) =>(
                 
                 <h1 key={item.id}> 
                 <Link to={`/shop/${item.id}`}>{item.name} </Link>
                 </h1>
                
               ))
           }
           
       </div>
    )
}



export default Shop

