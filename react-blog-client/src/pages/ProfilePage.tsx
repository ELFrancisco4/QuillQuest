import Navbar from "../Components/Nav/NavBar";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "../styles/ProfilePage.scss";

const ProfilePage = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="profile-container">
        <section className="profile-blog-posts">
          <h1>0xKali</h1>
          <nav>
            <ul>
              <li>
                <NavLink to={"/home/profile/posts"}>Posts</NavLink>
              </li>
              <li>
                <NavLink to={"/home/profile/lists"}>Lists</NavLink>
              </li>
              <li>
                <NavLink to={"/home/profile/about"}>About</NavLink>
              </li>
            </ul>
          </nav>

          <Outlet />
        </section>

        <section className="profile-details">
          <CgProfile />
          <span className="author-name">0xKali</span>
          <p className="bio">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            nobis ab eveniet ipsam rem ex aut dolores non voluptate ad?
          </p>
          <span className="profile-edit-btn">Edit profile</span>

          <ul className="profile-metadata">
            <li>
              <strong>Joined:</strong> 31/10/2023
            </li>
            <li>
              <strong> Email Address: </strong>kalikali@gmail.com
            </li>
            <li>
              {" "}
              <strong>Number of articles published:</strong> 10
            </li>
          </ul>

          <div className="profile-interests">
            <h3>Interests</h3>
            <ul>
              <li>Cyber</li>
              <li>Software</li>
              <li>CSS</li>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
