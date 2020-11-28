import React,{useState,useEffect} from 'react'


function Item({match}) {
    useEffect(()=>{
       fecthItem()
    },[])
    const [item,setItem] = useState({
       images:{}
    })
    const fecthItem = async () => {
        const data = await fetch(` https://fortniteapi.io/v1/items/get?id=${match.params.id}&lang=en`,{
            "headers" :{
                "Authorization":"c232a097-bf031289-cdb50bb3-54888349"
            }
        })
        const item = await data.json();
        console.log(item.item);
        setItem(item.item)
    }
    return (
        <div>
            <h2>{item.name}</h2>
            <img src={item.images.icon} alt="" />
        </div>
    )
}



export default Item


