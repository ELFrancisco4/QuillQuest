import "../styles/BlogLandingPage.scss";

const BlogLandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Blog App</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Signup</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <div className="headline">
          <div >
            <h1 className="title">Stay curious.</h1>
            <p className="description">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <button className="btn-start">Start reading</button>
          </div>
        </div>
        {/* Sample article preview */}
        <article className="article-preview">
          <h2>Sample Article Title</h2>
          <p>Intro of the article...</p>
          <button>Read More</button>
        </article>
        <article className="article-preview">
          <h2>Sample Article Title</h2>
          <p>Intro of the article...</p>
          <button>Read More</button>
        </article>
        <article className="article-preview">
          <h2>Sample Article Title</h2>
          <p>Intro of the article...</p>
          <button>Read More</button>
        </article>
      </main>
      
      <footer className="footer">
        <p>&copy; 2023 Blog App</p>
      </footer>
    </div>
  );
};

export default BlogLandingPage;
