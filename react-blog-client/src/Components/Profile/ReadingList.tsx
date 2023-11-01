import "./ReadingList.scss";
import { CgProfile } from "react-icons/cg";
import { BsLockFill } from "react-icons/bs";

const ReadingList = () => {
  return (
    <div className="reading-list-container">
      <div className="reading-list-header">
        <div>
          <CgProfile />
          <span className="username">0xKali</span>
        </div>

        <h3>Reading list</h3>
        <p>
          3 stories <BsLockFill />
        </p>
      </div>
      <div className="reading-list-content">
        <div className="image-stack">
          <img
            className="story-image"
            src="https://loremflickr.com/320/240?random=24"
            alt="Reading list icon"
          />
          <img
            className="story-image"
            src="https://loremflickr.com/320/240?random=25"
            alt="Reading list icon"
          />
          <img
            className="story-image"
            src="https://loremflickr.com/320/240?random=26"
            alt="Reading list icon"
          />
        </div>
        <span className="options">...</span>
      </div>
    </div>
  );
};

export default ReadingList;
