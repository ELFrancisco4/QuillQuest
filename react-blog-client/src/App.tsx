import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BlogLandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import BlogPosts from "./Components/Posts/BlogPosts";
import About from "./Components/Profile/About";
import ReadingList from "./Components/Profile/ReadingList";
import SignUp from "./pages/SignUp";
import InterestsPage from "./pages/InterestsPage";
import WriteNewArticle from "./Components/Posts/WriteNewArticle";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/write" element={<WriteNewArticle />} />
        <Route path="/interests" element={<InterestsPage />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BlogLandingPage />} />
        <Route path="/home/profile" element={<ProfilePage />}>
          <Route path="/home/profile/" element={<BlogPosts />} index />
          <Route path="/home/profile/about" element={<About />} />
          <Route path="/home/profile/lists" element={<ReadingList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
