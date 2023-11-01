import "./BlogPostsContainer.scss";

type BlogPostProps = {
  title: string;
  summary: string;
  category: string;
  readTime: string;
  imageSrc: string;
};

const BlogPost = ({
  title,
  summary,
  category,
  readTime,
  imageSrc,
}: BlogPostProps) => {
  return (
    <div className="blog-post">
      <img className="blog-post-image" src={imageSrc} alt="Blog Thumbnail" />
      <div className="blog-post-content">
        <h2 className="blog-post-title">{title}</h2>
        <p className="blog-post-summary">{summary}</p>
        <div className="blog-post-meta">
          <span className="blog-post-category">{category}</span>
          <span className="blog-post-read-time">{readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
