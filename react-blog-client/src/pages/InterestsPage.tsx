import React, { useState } from "react";
import "../styles/InterestsPage.scss";
import logo from "../assets/images/QuillQuest.jpeg";
import { useNavigate } from "react-router-dom";

const interestsList = [
  "Programming",
  "Data Science",
  "Technology",
  "Self Improvement",
  "Writing",
  "Relationships",
  "Machine Learning",
  "Productivity",
  "Health",
  "Hacking",
  "Sports",
  "Kubernetes",
  "Cyber Security",
  // ... (Include all other interests from the image)
];

const InterestsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="interests-container">
      <span className="blog-logo">
        <img src={logo} alt="QuillQuest Logo" />
        <h2>QuillQuest</h2>
      </span>
      <h2>What are you interested in?</h2>
      <p>Choose three or more.</p>
      <div className="interests-grid">
        {interestsList.map((interest) => (
          <button
            key={interest}
            className={selectedInterests.includes(interest) ? "selected" : ""}
            onClick={() => toggleInterest(interest)}
          >
            {interest} +
          </button>
        ))}
      </div>
      <button className="continue-btn">Continue</button>
    </div>
  );
};

export default InterestsPage;
