import "../styles.scss";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const LandingPageFooter = () => {
  return (
    <footer className="landing_page_footer">
      <h1>IdeaStream Blog</h1>
      <div className="social_media_icons">
        {/* Add social media icons here */}
        <span>
          <AiOutlineTwitter />
          <AiFillFacebook />
          <AiFillInstagram />
        </span>
        <p> Copyright, 2023</p>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
