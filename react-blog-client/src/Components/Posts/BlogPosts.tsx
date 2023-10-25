import React from 'react';
import './BlogPosts.scss'
const BlogPosts: React.FC = () => {
    const mockPosts = [
        { title: 'Post 1', content: 'Lorem ipsum dolor sit amet...' },
        { title: 'Post 2', content: 'Consectetur adipiscing elit...' },
        // ...other mock posts
    ];

    return (
        <div className="blog-posts">
            {mockPosts.map((post, index) => (
                <div key={index} className="blog-post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogPosts;
