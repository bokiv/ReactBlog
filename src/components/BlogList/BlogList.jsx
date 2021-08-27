import {useState, useEffect } from 'react';

//import { blogPosts } from '../../data/blog-posts.js';
import { getBlogs } from '../../services/blogService.js';
//import { Blog } from '../Blog/Blog.jsx'

import './BlogList.css';

export const BlogList = () => {
     const [blogs ,setBlogs] = useState([])
     const [inputValue, setinputValue] = useState("")

    useEffect(() =>{
        getBlogs().then(blogs => {
            setBlogs(blogs);
        });
    },[])

    const onTyping = (event) => {
        
        setinputValue(event.target.value)
    }

    const onSubmit = () => {
        console.log(inputValue)
        const filteredBlogs = blogs.filter(blog =>{
            return blog.title.includes(inputValue)
        })
            setBlogs(filteredBlogs)
    }

    if(blogs.length === 0) return(<div>Loading..</div>)

    return (
        <div className="blogList">
            <input value={inputValue} type="text" onChange={onTyping} />
            <button onClick={onSubmit}>Submit</button>
            {blogs.map((post,index)  => (
                <div className="blogItem" key={index} >
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))} 
       
        </div>
    );
}

// export class BlogList extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             blogs : []
//         }
//     }
//     componentDidMount(){
//         getBlogs()
//             .then(blogs => {
//                 this.setState({blogs})
//             })
        
//     }
    
//     //blogs = fetchBlogs();
//     render(){
//         if(this.state.blogs.length === 0) return(<div>Loading..</div>)
//         return(
//         <div className="blogList">
//          {this.state.blogs.map((post,index)  => (
//             <div className="blogItem" key={index} >
//                 <h2>{post.title}</h2>
//                 <p>{post.body}</p>
//             </div>
//         ))} 
//         {/* this.state.blogs.map((post, index) => <Blog post={post} key={index} />) */}
        
//      </div>
//      );
//     }
// }

// export const BlogList = () => {
    
//     return (
//          <div className="blogList">
//             {/* {blogPosts.map((post,index)  => (
//                 <div className="blogItem" >
//                     <h2>{post.title}</h2>
//                     <p>{post.body}</p>
//                 </div>
//             ))} */
//             blogPosts.map((post, index) => <Blog post={post} key={index} />)
//             }
//          </div>
        
//     );
// };
