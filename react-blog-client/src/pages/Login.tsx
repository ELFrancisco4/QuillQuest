import "../styles/Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="left-section">
          <h2>Welcome to QuillQuest</h2>
          <p> Please Login to your Account.</p>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <span>
            {" "}
            <a href="#">Forgotten Password?</a>
          </span>
          <button className="btn btn-login">Login</button>
          <span>
            Not signed up? Create a new account{" "}
            <Link to="/register">here.</Link>
          </span>
        </div>
        <div className="right-section">
          {/* Image, icons and additional text can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Login;
