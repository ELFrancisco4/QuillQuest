import "../blog.scss";

type ArticleProps = {
  img_url: string;
  title: string;
  author: string;
  content: string;
  date: string;
  category: string;
  article_img: string;
};

const Article = ({
  img_url,
  title,
  author,
  content,
  date,
  category,
  article_img,
}: ArticleProps) => {
  return (
    <div className="article_container">
      <span className="author_details">
        <img src={img_url} alt="Profile Picture" /> <p>{author}</p> <p>.</p>
        <p>{date}</p>
      </span>
      <div>
        <span>
          <h2>{title}</h2>

          <p className="article_content">{content}</p>
        </span>

        <img src={article_img} alt="Article Image " />
      </div>
      <span className="category">{category}</span>
    </div>
  );
};

export default Article;
