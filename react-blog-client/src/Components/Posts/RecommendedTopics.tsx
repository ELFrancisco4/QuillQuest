import "./RecommendedTopics.scss";

const RecommendedTopics: React.FC = () => {
  const mockTopics = [
    "Topic 1",
    "Topic 2",
    // ...other mock topics
  ];

  return (
    <div className="recommended-topics">
      <h2>Recommended Topics</h2>
      <div className="topics-grid">
        {mockTopics.map((topic, index) => (
          <div key={index} className="topic">
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedTopics;
