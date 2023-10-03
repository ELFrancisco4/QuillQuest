import { AiOutlineSearch } from "react-icons/ai";
import { LiaEditSolid } from "react-icons/lia";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import "./style.scss";
import logo from "../../assets/BlogLogo.svg";
const Nav = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="App logo" className="blog_logo" />
        <span className="search">
          <AiOutlineSearch />
          <input
            className="search"
            placeholder="Search for anything"
            type="text"
          />
        </span>
      </div>

      <div>
        <span>
          <LiaEditSolid /> <p>Write</p>
        </span>

        <IoIosNotificationsOutline />

        <span>
          <CgProfile />
          <BsChevronDown className="profile_menu" />
        </span>
      </div>
    </nav>
  );
};

export default Nav;
