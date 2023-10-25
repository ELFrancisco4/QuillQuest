import React from "react";

const SignUp: React.FC = () => {
  return (
    <div className="auth-page">
      <form className="auth-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Author Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
