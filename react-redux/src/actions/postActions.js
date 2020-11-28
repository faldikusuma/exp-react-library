import {FETCH_POSTS, NEW_POST} from './Types'

export const fetchpost = () => dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json()).then(allpost => dispatch({
        type:FETCH_POSTS,
        payload:allpost
    }))
}

export const createpost = postdata => dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(postdata)
    }).then(res => res.json()).then(newpost => dispatch({
        type:NEW_POST,
        payload:newpost
    }))
}
