import React from "react";
import "../styles/Home.scss";
import Navbar from "../Components/Nav/NavBar";
import BlogPosts from "../Components/Posts/BlogPosts";
import RecentlySavedPosts from "../Components/Posts/RecentlySavedPosts";
import RecommendedTopics from "../Components/Posts/RecommendedTopics";
const Home: React.FC = () => {
  return (
    <div className="homepage">
      <Navbar />
      <header className="homepage-header">
        <h1>IdeaStream Blog</h1>
      </header>
      <main className="homepage-main">
        <div className="content-section">
          <BlogPosts />
        </div>
        <div className="sidebar-section">
          <RecentlySavedPosts />
          <RecommendedTopics />
        </div>
      </main>

      <footer className="homepage-footer">
        <p>&copy; 2023 IdeaStream Blog</p>
      </footer>
    </div>
  );
};

export default Home;
