import "../styles.scss";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
const LandingPageNavigation = () => {
  return (
    <nav className="landing_page_nav">
      <h2>IdeaStream Blog</h2>
      <div>
        <AiOutlineTwitter />
        <BsInstagram />
        <BsFacebook />
      </div>
    </nav>
  );
};

export default LandingPageNavigation;
