import React from "react";
import "./WriteNewArticle.scss";
import logo from "../../assets/images/QuillQuest.jpeg";
import { AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import ToolBar from "./Toolbar";

const WriteNewArticle: React.FC = () => {
  return (
    <div className="write-new-article">
      <nav>
        <div>
          <span>
            <img src={logo} alt="" /> <strong>QuillQuest</strong>
          </span>
          <span>Drafts in 0xKali</span>
        </div>

        <ul>
          <li>
            <span className="publish-article">Publish</span>
          </li>
          <li>
            <AiOutlineBell />
          </li>
          <li>
            <CgProfile />
          </li>
        </ul>
      </nav>

      <div className="article-content">
        <div className="article-content-body">
          <ToolBar />
          <input className="blog-title" type="text" placeholder="Title" />
          <textarea
            placeholder="Tell your story..."
            name="name"
            id="text-area"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default WriteNewArticle;
