import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import BlogLandingPage from "./Pages/LandingPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<BlogLandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
