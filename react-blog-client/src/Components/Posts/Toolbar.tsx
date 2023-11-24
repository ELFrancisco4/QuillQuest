import React, { useState } from "react";
import {
  FaCamera,
  FaVideo,
  FaMicrophone,
  FaLink,
  FaCode,
  FaEllipsisH,
} from "react-icons/fa";
import { IoMdClose, IoMdAdd } from "react-icons/io";

const ToolBar = () => {
  const [toolbarVisible, setToolbarVisible] = useState(false);

  return (
    <div>
      <button
        className="icon-button toggle"
        onClick={() => setToolbarVisible((prev) => !prev)}
      >
        {toolbarVisible ? <IoMdClose /> : <IoMdAdd />}
      </button>
      {toolbarVisible && (
        <div className="toolbar">
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
        </div>
      )}
    </div>
  );
};

export default ToolBar;
