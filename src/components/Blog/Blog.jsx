import React ,{Component} from 'react';


import './Blog.css' 

export const Blog = (props) => {
    console.log(props);
    return (
        
            <div className="blogItem"  >
                <h2>{props.post.title}</h2>
                <p>{props.post.body}</p>
            </div>
    )
}