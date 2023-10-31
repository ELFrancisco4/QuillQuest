import React from "react";
import "./BlogPostsContainer.scss";
import MockData from "./../../mock-data";
import BlogPost from "./BlogPost";
const BlogPostsContainer: React.FC = () => {
  const blogposts = MockData.slice(1, 10);
  return (
    <div className="blog-posts">
      {blogposts.map((post, index) => (
        <BlogPost
          category={post.category}
          imageSrc={post.imageSrc}
          readTime={post.readTime}
          summary={post.summary}
          title={post.title}
          key={index}
        />
      ))}
    </div>
  );
};

export default BlogPostsContainer;
