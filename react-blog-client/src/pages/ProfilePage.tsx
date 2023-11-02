import Navbar from "../Components/Nav/NavBar";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import "../styles/ProfilePage.scss";
import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
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
                <NavLink to={"/home/profile/"}>Posts</NavLink>
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
          <span className="profile-edit-btn" onClick={() => setIsOpen(true)}>
            Edit profile
          </span>

          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel="Profile Information"
            className="profile-modal"
            overlayClassName="overlay"
          >
            <h2>Profile Information</h2>{" "}
            <span className="close-button" onClick={() => setIsOpen(false)}>
              <AiOutlineClose />
            </span>
            <div className="photo-section">
              {/* <img src="path_to_image.jpg" alt="Profile" /> */}
              <CgProfile />
              <button className="upload-photo">Update</button>
              <button className="delete-photo">Remove</button>
              <p>
                Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
                side.
              </p>
            </div>
            <div className="name-section">
              <label>Name*</label>
              <input type="text" value="0xKali" readOnly />
              <p>
                Appears on your Profile page, as your byline, and in your
                responses. 6/50
              </p>
            </div>
            <div className="bio-section">
              <label>Bio</label>
              <textarea>...</textarea>
              <p>Appears on your Profile and next to your stories. 92/160</p>
            </div>
            <div className="actions">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button>Save</button>
            </div>
          </Modal>

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
              <li>Mongodb</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
