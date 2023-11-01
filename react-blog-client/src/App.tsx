import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import BlogLandingPage from "./Pages/LandingPage";
import ProfilePage from "./Pages/ProfilePage";
import BlogPosts from "./Components/Posts/BlogPosts";
import About from "./Components/Profile/About";
import ReadingList from "./Components/Profile/ReadingList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BlogLandingPage />} />
        <Route path="/home/profile" element={<ProfilePage />}>
          <Route path="/home/profile/" element={<BlogPosts />}  index />
          <Route path="/home/profile/about" element={<About />} />
          <Route path="/home/profile/lists" element={<ReadingList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
