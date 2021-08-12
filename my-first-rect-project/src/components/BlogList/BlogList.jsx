import React from 'react';

import blogPosts from '../../data/blog-posts.js';

import './BlogList.css';

export const BlogList = () => {
    console.log(blogPosts);
    return (
        <div className="blogList">
            {blogPosts.map(post => (
                <div className="blogItem">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};
