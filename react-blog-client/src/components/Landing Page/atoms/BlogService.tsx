type BlogServiceProps = {
  title: string;
  imgUrl: string;
  desc: string;
};

const BlogService = ({ title, imgUrl, desc }: BlogServiceProps) => {
  return (
    <div className="blogService">
      <img src={imgUrl} alt={imgUrl} />
      <h2>{title}</h2>
      <span>{desc}</span>
      <button>More info</button>
    </div>
  );
};

export default BlogService;
