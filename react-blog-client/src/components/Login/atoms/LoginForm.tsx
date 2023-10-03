import Button from "./Button";
import "../style.scss";
const LoginForm = () => {
  return (
    <div className="login_container">
      <h1>Login to your account</h1>
      <p>Login to get a splendid reading and writing experience</p>
      <form>
        <span>
          <label htmlFor="email">Email:</label>{" "}
          <input id="email" type="email" placeholder="erling@email.com" />
        </span>
        <span>
          <label htmlFor="password">Password:</label>{" "}
          <input
            id="password"
            type="password"
            placeholder="Super Strong Password..."
          />
        </span>

        <Button text="Log in" />
      </form>
      <p>
        Don't have an account? <a href="#">Create an account</a>
      </p>
    </div>
  );
};

export default LoginForm;
