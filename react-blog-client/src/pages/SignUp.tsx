import SignUpForm from "../components/SignUp/SignUpForm";
import img from "../assets/abstract.jpg";
import "../styles/signUpPage.scss";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="signUp">
      <section className="img_container">
        <img src={img} alt={img} />
      </section>

      <section className="signUp_form_container">
        <h1>Create an Account</h1>
        <p>Create an account to get the best reading and writing experience</p>
        <SignUpForm />
        <span>
          Already signed in?{" "}
          <a href="/login" onClick={() => navigate("/login")}>
            Click here to login
          </a>
        </span>
      </section>
    </div>
  );
};

export default SignUp;
