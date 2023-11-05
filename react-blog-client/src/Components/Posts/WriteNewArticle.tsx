import React from "react";
import "./WriteNewArticle.scss";
import {
  FaCamera,
  FaMicrophone,
  FaCode,
  FaLink,
  FaVideo,
  FaEllipsisH,
  FaCheckCircle,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./WriteNewArticle.scss";
import logo from "../../assets/images/QuillQuest.jpeg";
import { AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const WriteNewArticle: React.FC = () => {
  return (
    <div className="write-new-article">
      <nav>
        <span>
          <img src={logo} alt="" /> <strong>QuillQuest</strong>
        </span>
        <span>Drafts in 0xKali</span>

        <ul>
          <li>
            <span>Publish</span>
          </li>
          <li>
            <AiOutlineBell />
          </li>
          <li>
            <CgProfile />
          </li>
        </ul>
      </nav>

      <div className="toolbar">
        <button className="icon-button close">
          <IoMdClose />
        </button>
        <div className="icons">
          <button className="icon-button">
            <FaCamera />
          </button>
          <button className="icon-button">
            <FaVideo />
          </button>
          <button className="icon-button">
            <FaMicrophone />
          </button>
          <button className="icon-button">
            <FaLink />
          </button>
          <button className="icon-button">
            <FaCode />
          </button>
          <button className="icon-button">
            <FaEllipsisH />
          </button>
        </div>
        <button className="icon-button check">
          <FaCheckCircle />
        </button>
      </div>

      <div>
        <input type="text" placeholder="Title" />

        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default WriteNewArticle;
