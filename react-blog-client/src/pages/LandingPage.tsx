import "../styles/BlogLandingPage.scss";
import headlineImg from "../assets/images/headline-img.jpeg";

const BlogLandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>QuillQuest</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li className="login-link">
              <a href="#">Login</a>
            </li>
            <li className="signup-link">
              <a href="#">Signup</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <div className="headline">
          <div>
            <h1 className="title">Never stop learning</h1>
            <p className="description">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <button className="btn-start">Start reading</button>
          </div>

          <img src={headlineImg} alt={headlineImg} />
        </div>

        <section className="content-body-section">
          <div className="content-body-section-articles">
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
          </div>

          <div className="content-body-section-more-articles">
            <h4>Discover what matters to you</h4>
            <div>
              <span>Code</span>
              <span>Docker</span>
              <span>CSS</span>
              <span>Mongodb</span>
              <span>Java</span>
              <span>Kubernetes</span>
              <span>AWS</span>
              <span>Azure</span>
              <span>Nestjs</span>
            </div>
            <a href="#">See more topics</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 QuillQuest</p>
      </footer>
    </div>
  );
};

export default BlogLandingPage;
