import "./style.scss";
// import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "@matheusluizn/react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const SignUpForm = () => {
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };

    gapi.load("client:auth2", start);
  });
  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <form>
      <div>
        <span>
          <label htmlFor="username">FullName</label>
          <input type="text" placeholder="Username" />
        </span>
        <span>
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="JohnDoe@gmail.com" />
        </span>

        <span>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter your password" />
        </span>
        <button>Sign Up</button>
      </div>
      OR
      <GoogleLogin
        clientId={clientId}
        className="googleAuth"
        buttonText="Sign up with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </form>
  );
};

export default SignUpForm;
