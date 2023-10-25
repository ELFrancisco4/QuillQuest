import React from 'react';
import './RecentlySavedPosts.scss'

const RecentlySavedPosts: React.FC = () => {
    const mockSaved = [
        { title: 'Saved Post 1' },
        { title: 'Saved Post 2' },
        // ...other mock saved posts
    ];

    return (
        <div className="recently-saved">
            <h2>Recently Saved</h2>
            <ul>
                {mockSaved.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecentlySavedPosts;
