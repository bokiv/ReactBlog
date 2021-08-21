import {Component} from 'react';

//import { blogPosts } from '../../data/blog-posts.js';
import { getBlogs } from '../../services/blogService.js';
//import { Blog } from '../Blog/Blog.jsx'

import './BlogList.css';

export class BlogList extends Component {
    constructor(props){
        super(props)
        this.state = {
            blogs : []
        }
    }
    componentDidMount(){
        getBlogs()
            .then(blogs => {
                this.setState({blogs})
            })
        
    }
    
    //blogs = fetchBlogs();
    render(){
        if(this.state.blogs.length === 0) return(<div>Loading..</div>)
        return(
        <div className="blogList">
         {this.state.blogs.map((post,index)  => (
            <div className="blogItem" >
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))} 
        {/* this.state.blogs.map((post, index) => <Blog post={post} key={index} />) */}
        
     </div>
     );
    }
}

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
