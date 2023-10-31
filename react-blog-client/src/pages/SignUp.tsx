import "../styles/Signup.scss";
import quillquest from "../assets/images/QuillQuest.jpeg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container">
      <div className="signup-card">
        <div className="left">
          <h2> QuillQuest Sign Up Page</h2>
          <p> Create a new Account</p>
          <input type="text" placeholder="Author Name" required />
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="btn btn-login">Sign Up</button>
          <p className="or-separator">OR</p>
          <span className="google-signup">
            Sign Up with Google
            <FcGoogle />
          </span>
          <span>
            Already have an account? Login <Link to="/login">here.</Link>
          </span>
        </div>
        <div className="right">
          <img src={quillquest} alt={quillquest} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
