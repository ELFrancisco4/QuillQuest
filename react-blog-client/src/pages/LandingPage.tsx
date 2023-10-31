import "../styles/BlogLandingPage.scss";
import headlineImg from "../assets/images/headline-img.jpeg";
import logo from "../assets/images/QuillQuest.jpeg";
import { Link, useNavigate } from "react-router-dom";

const BlogLandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <header className="header">
        <h1>
          <img src={logo} alt={logo} /> QuillQuest
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="login-link">
              <Link to="/login">Login</Link>
            </li>
            <li className="signup-link">
              <Link to="/register">Signup</Link>
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
            <button className="btn-start" onClick={() => navigate("/register")}>
              Start reading
            </button>
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
            <Link to="#">See more topics</Link>
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
