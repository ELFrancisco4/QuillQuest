import "../styles/Login.scss";

const MicrochipLogin = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="left-section">
          <h2>Welcome to IdeaStream Blog</h2>
          <p>Welcome back, Please Login to your Account.</p>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn btn-login">Login</button>
        </div>
        <div className="right-section">
          {/* Image, icons and additional text can be added here */}
        </div>
      </div>
    </div>
  );
};

export default MicrochipLogin;
